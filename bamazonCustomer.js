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
//LAST FUNCTION   connection.end(); //ASYNCHRONOUS DON"T WANT TO HAVE IN WRONG PLACE!!!
// conncect to table

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
        if (res.length === 0){
          console.log('that item ID was incorrect')
          showTable();
        }
      console.log(res)
      var product = res[0]
      var itemID = product.item_id;
      var stockQuantity = product.stock_quantity;
      var price = product.price;
      var cart = product.product_name;

    // if (isNaN(answer.id) || answer.id !== itemID) {
    //   console.log("You have picked an incorrect item number. Please try again.".zebra);
    //   customerShop()
    // }
      // connection.query("SELECT price, quantity, FROM ?",{
      //   itemID: answer.item_id
      // },function(err, res) {
      //   if (err)
      //     throw (err)
      //     console.log(res)
      if (answer.quantity >= (stockQuantity)) {
        console.log("Insufficient quantity of this item" + stockQuantity + "Please try again".red.underline)
        customerShop()
      }
      else {
        var newStockQuantity = stockQuantity - answer.quantity;
        var totalPrice = stockQuantity * price

        connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: newStockQuantity

        }], function (err) {
          if (err) 
              throw err;
        })
        if (err === false) {
          console.log("Thank you for your purchase. Your card was charged a total of ".rainbow + totalPrice.rainbow.bold + "\n");
        }
      }
    })
  })
};