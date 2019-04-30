var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');
//var table or cli-table or ???
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
    head: ['Item Id'.yellow.bold, 'Product Name'.rainbow.italic, 'Price'.green.bgWhite]
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
    if (isNaN(answer.id) || answer.id !== item_id) {
      console.log("You have picked an incorrect item number. Please try again.".zebra);
      customerShop()
    }
      connection.query("SELECT price, quantity, FROM ?",{
        item_id: answer.item_id
      } function (err, res) {
        if (err)
          throw (err)
          console.log(res)
      if (answer.quantity >= answer.id(stock_quantity)) {
        console.log("Insufficient quantity of this item" + answer.id(stock_quantity) + "Please try again".red.underline)
        customerShop()
      }
      else {
        var newStockQuantity = answer.id(stock_quantity) - answer.quantity;
        var totalPrice = answer.id(stock_quantity) * answer.id(price)

        connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: newStockQuantity

        }], function (err) {
          if (err) 
              throw err;
        })
        if (err === false) {
          console.log("Thank you for your purchase. Your card was charged a total of ".rainbow + totalPrice.rainbow.bold + "\n")
        }
      }
    })
  }
}