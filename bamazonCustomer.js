var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');
var colors = require("colors");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showTable();
});
var id;
var stock;
function showTable() {
  console.log("  Welcomed To Bamazon!\n  Enjoy Shopping\n  Here Are the Items Available".green.bold)
  var newTable = new Table({
    head: ['Item Id'.rainbow, 'Product Name'.rainbow.italic, 'Price'.america],
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
             , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
             , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
             , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
  connection.query("SELECT * FROM products", function (err, res) {
    if (err)
      throw (err);

    for (var i = 0; i < res.length; i++) {
      newTable.push([res[i].item_id, res[i].product_name, res[i].price]);
      id = res[i].item_id;
      stock = res[i].stock_quantity;
      console.log(res[i].item_id);
    }
    console.log(newTable.toString())
    customerShop()
  });

}
function customerShop() {

  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "Please pick the item by Item Id, you would like to purchase."
  },
  {
    name: "quantity",
    type: "input",
    message: "How many of this item to you want?"
  }])

    .then(function (answer) {
      if (answer.id !== NaN && answer.quantity !== NaN) {
        connection.query("SELECT * FROM products WHERE item_id =" + answer.id, function (err, res) {
          if (err)
            throw (err);
          if (res.length === 0) {
            console.log("That item ID was incorrect, please try again.")
            showTable();
          }

          var product = res[0];
          var stockQuantity = product.stock_quantity;
          var price = product.price;
          var cID = product.item_id;
          var cart = product.product_name;
            
          if (answer.quantity > stockQuantity) {
              inquirer
                .prompt({
                  name: "insufficient",
                  type: "list",
                  message: "Insufficient quantity of this item. We have  " + stockQuantity + ".",
                  choices: ["Try again", "Exit"]
                })
                .then(function (answer) {
                  console.log(answer.insufficient)
                  if (answer.insufficient === "Try again") {
                    customerShop();
                  } else {
                    connection.end();
                  }
                });
            
          }
          else {
            var newStockQuantity = res[0].stock_quantity - answer.quantity;
            var total = price * answer.quantity;
            var totalPrice = total.toFixed(2);

            connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: newStockQuantity
            },
            {
              item_id: cID

            }], function (err, res) {
              if (err) throw err;
              if (res !== err) {
                console.log("Thank you for your purchase of ".rainbow + cart + " . Your card was charged a total of " + totalPrice + ".\n It was a pleasure doing business with you please come back again soon.\n".rainbow);
              }
            }
            )
          } 
        })
      }
    })
};
