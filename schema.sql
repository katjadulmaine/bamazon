DROP DATABASE IF EXISTS bamazon_db;
  
CREATE DATABASE bamazon_db;
  
USE bamazon_db;
  
CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (200) NOT NULL,
    department_name VARCHAR (40) NOT NULL,
    price DECIMAL (11, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
    );  
  
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hohner Diatonic Accordion", "Musical Instruments", 495.00, 101);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Waltons Walnut Bodhran", "Musical Instruments", 360.40, 53); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Turkish Davul Drum", "Musical Instruments", 449.96, 80); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Maple Wood Bassoon", "Musical Instruments", 6750.94, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snake Hook, Copperhead Series", "Pet Supplies", 38.90, 26);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deluxe Dog Bed, Extra Large Round", "Pet Supplies", 85.99, 98);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motorcycle Bluetooth Helmets)", "MC Accessories", 224.99, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motorcycle BS Pegs", "MC Accessories", 189.98, 92); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPhone XS Max (64GB)", "Apple Products", 1099.97, 121); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iMac Pro 27 in", "Apple Products", 1299.95, 80); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("New Porsche 918 Spyder", "Vehicles", 875000.00, 4); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2006 Corvette, Monterey Red", "Vehicles", 26885.00, 11); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox 360 LtdEd HALO 4 Bundle", "Video Games", 577.68, 62); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox 360 LtdEd STAR WARS Bundle", "Video Games", 539.99, 202); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ZOTAC Gaming Mek Mini Gaming PC", "Video Games", 1599.97, 67); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("125 of Eve Langlais Books", "Books", 374.96, 4); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coding Languages for Absolute Beginners", "Books", 11.96, 184);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Robert Hargraves- Complete Collection", "Books", 108.62, 731); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Forgotten 500 Gregory A. Freeman", "Books", 13.99, 731);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Old Bones: Wonder Horse by Mildred Pace  ", "Books", 4.90, 85); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Ribbons for Meg by Adele De Leeuw", "Books", 3.80, 67);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Out of Darkness by Russell Freedman", "Books", 19.91, 803);