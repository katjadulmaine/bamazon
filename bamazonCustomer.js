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

function showTable() {
  var newTable = new Table({
    head: ['Item Id'.yellow.bold, 'Product Name'.rainbow.italic, 'Price'.america]
    //colWidths:
  });
  connection.query("SELECT * FROM products", function (err, res) {
    if (err)
      throw (err);

    for (var i = 0; i < res.length; i++) {
      newTable.push([res[i].item_id, res[i].product_name, res[i].price]);
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
        var id = product.item_id;
        var cart = product.product_name;

        if (answer.quantity > stockQuantity) {
          console.log("Insufficient quantity of this item. We have  " + stockQuantity.bold + " Please try again".red.underline)
          customerShop()
        }
        else {
          var newStockQuantity = res[0].stock_quantity - answer.quantity;
          var total = price * answer.quantity;
          var totalPrice = total.toFixed(2);
          
          connection.query("UPDATE products SET ? WHERE ?", [{
            stockQuantity: newStockQuantity
          },
          {
            id: answer.id

          }], function (err, res) {
            if (err) throw err;           
          }
          )
        } if (res !== err){
          console.log("Thank you for your purchase of ".rainbow + cart + " . Your card was charged a total of " + totalPrice + ".\n It was a pleasure doing business with you please come back again soon.\n".rainbow);
        }
    })}
    )
};
