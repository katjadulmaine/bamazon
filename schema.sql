 DROP DATABASE IF  bamazon_db;
  
  CREATE DATABASE bamazon_db;
  
  CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (40) NOT NULL,
    department_name VARCHAR (40) NOT NULL,
    price DECIMAL (8, 2) NOT NULL,
    stock_quantity (9) INTEGER NOT NULL,
    PRIMARY KEY (item_id)
    );  
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Hohner Panther G/C/F 3-Row Diatonic Accordion - Black", "Musical Instruments", 495.00, 101), 
         ("24 inch Tambourine Siberian Shamanic Circle with setting Drum Frame Handcrafted", "Musical Instruments", 574.96, 38), 
         ("Waltons 15 inch Tuneable F Walnut Bodhran", "Musical Instruments", 360.40, 53), 
         ("Turkish Professional Davul Percussion Drum ED-200", 449.96, 80), 
         ("Professional maple wood bassoon instruments", "Musical Instruments", 6750.94, 2), 
         ("Fox Renard Model 240 Bassoon (Standard)", "Musical Instruments", 15987.75, 4), 
         ("Vintage 52 Cm Jerusalem Silver Plated Rams Horn Shofar Judaica Israel", "Musical Instruments", 700.10, 20), 
         ("Uilleann Bagpipes, Full Set, Blackwood", "Musical Instruments", 1550.00, 8), 
         ("Hurdy-Gurdy/Ukrainian Lira/Organistrum/Lyre/Barbiton/Wheel Vielle/Handmade Musical Instrument/Wheel Fiddle/Natural wood", "Musical Instruments", 1265.00, 4), ("DocSeward Snake Hook, Copperhead Series™ for Snakes Small to the Size of a Ball Python, Stainless Steel & Copper, Cage Length", "Pet Supplies", 38.90, 26), ("Motorcycle Bluetooth Helmets,FreedConn Flip up Dual Visors Full Face Helmet,Built-in Integrated Intercom Communication System(Range 500M,2-3Riders Pairing,FM radio,Waterproof,L,Red)", "Motorcycle Accessories", 224.99, 35), ("Motorcycle Bluetooth Helmets,FreedConn Flip up Dual Visors Full Face Helmet,Built-in Integrated Intercom Communication System(Range 500M,2-3Riders Pairing,FM radio,Waterproof,M,Gloss Black)", "Motorcycle Accessories", 189.98, 92), ("Apple iPhone XS Max (64GB) - Gold", "Apple Products", 1099.97, 121), ("Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 64GB RAM, 1TB SSD, Radeon Pro Vega 64) - Space Gray ", "Apple Products", 1299.95, 80), ("Brand new Porsche 918 Spyder with Weissach package", "Vehicles", 875000.00, 4), ("2006 Chevrolet Corvette Z06 2-Door Coupe, Monterey Red Met Tintcoat", "Vehicles", 26885.00, 11), ("Xbox 360 Limited Edition Halo 4 Bundle", "Video Games", 577.68, 62), ("Xbox 360 Limited Edition Kinect Star Wars Bundle", "Video Games", 539.99, 202), ("ZOTAC Gaming Mek Mini Gaming PC, GeForce RTX 2070 8GB GDDR6, 6-Core Intel Core i7-8700, 16GB DDR4/240GB Nvme SSD/2TB HDD/Windows 10 System, GM2070C701B-U-W2B", "Video Games", 1599.97, 67), ("Professional PC Gaming Accessories and VR Bundle Including Redragon Headset, Backlit Ergonomic Keyboard, Backlit 6 Button Mouse, Waterproof Mousepad, HTC Vive Pro VR System, and 1 Year Warranty", "Video Games", 1399.99, 400), ("Bandai Tamashii Nations S.H. Figuarts Thanos Avengers: Infinity War Action Figure", 159.50, 211), ("LEGO Marvel Super Heroes Avengers: Infinity War The Hulkbuster: Ultron Edition 76105 Building Kit (1363 Piece)", "Toys and Games", 129.95, 350), ("Glion Dolly Foldable Lightweight Adult Electric Scooter w. Premium Li-Ion Battery", "Toys and Games", 499.00, 405), ("125 of Eve Langlais Books", "Books", 374.96, 4), ("Coding Languages for Absolute Beginners: 6 Books in 1- Arduino, C++, C#, Powershell, Python & SQL ", "Books", 11.96, 184), ("Robert Hargraves- Little Miss My Complete Collection Box set", "Books", 108.62, 731), ("The Forgotten 500: The Untold Story of the Men Who Risked All for the Greatest Rescue Mission of World War II: The Untold Story of the Men Who Risked All ... the GreatestRescue Mission of World War II by Gregory A. Freeman", "Books", 13.99, 731), ("Old Bones the Wonder Horse Kentucky Derby Champion by Mildred Mastin Pace  ", "Books", 4.90, 85), ("Blue Ribbons for Meg by Adele De Leeuw", "Books", 3.80, 67), ("Out of Darkness: THe Story of Louis Braille by Russell Freedman with 4 lines 28 cells braille writing slate and stylus", "Books", 19.91, 803);

