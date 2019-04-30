var mysql = require("mysql");
var inquirer = require("inquirer")
//var table or cli-table or ???
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection(); 
  });
//LAST FUNCTION   connection.end(); //ASYNCHRONOUS DON"T WANT TO HAVE IN WRONG PLACE!!!

  // conncect to table
function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) 
      throw (err);
      console.log(res);
    
    });
  };
//Display all items ids names prices
 function displayItems (){
    var response = "SELECT * FROM songs";
    connection.response(response, function (error, responsse){
        for (var i =0; i < response.length; i++){
    //var table =;
    //table.push
        };
    });
 };
//inquirer 2 messages ask id how many
function customerShop() {
    inquirer.prompt([{
        name: "id",
        type:
        message: "Please pick the item you would like to purchase.",
    },
    {
        name: "quantity",
        message: "How many of this item to you want?",
    }])
    .then(function(answer){
        if(isNaN(answer.id) || answer.threadId > id.length)
        console.log("You have picked an incorrect item number. Please try again.");
        
        customerShop ()
    });  
    updateTable(answer.id, answer.quantity)
    
     
};
//check availablity
// 2 way innsufficient quantity or does & fulfill order
// update SQL need to subtract sale  and show total cost
// function updateTable(item, quantity) {
//     var response = "SELECT stock_quantity FROM products WHERE item_id =" + id;
//     connection.response(response, function (error, responsse){
//         var itemQuantity = response[0].stock_quantity;
//         if (parseInt(quantity) >= parseInt(itemQuantity)){}
//     })
// }


    