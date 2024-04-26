const express = require("express");
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/item');

const items=[
    {
      "id": "001",
      "image": "images/1.jpg",
      "company": "Carlton London",
      "item_name": "Rhodium-Plated CZ Floral Studs",
      "original_price": 1045,
      "current_price": 606,
      "discount_percentage": 42,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 4.5, "count": 1400 }
    },
    {
      "id": "002",
      "image": "images/2.jpg",
      "company": "CUKOO",
      "item_name": "Women Padded Halter Neck Swimming Dress",
      "original_price": 2599,
      "current_price": 1507,
      "discount_percentage": 42,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 4.3, "count": 24 }
    },
    {
      "id": "003",
      "image": "images/3.jpg",
      "company": "NUEVOSDAMAS",
      "item_name": "Women Red & White Printed A-Line Knee-Length Skirts",
      "original_price": 1599,
      "current_price": 495,
      "discount_percentage": 69,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 4.1, "count": 249 }
    },
    {
      "id": "004",
      "image": "images/4.jpg",
      "company": "ADIDAS",
      "item_name": "Indian Cricket ODI Jersey",
      "original_price": 999,
      "current_price": 999,
      "discount_percentage": 0,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 5, "count": 10 }
    },
    {
      "id": "005",
      "image": "images/5.jpg",
      "company": "Roadster",
      "item_name": "Pure Cotton T-shirt",
      "original_price": 1399,
      "current_price": 489,
      "discount_percentage": 65,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 4.2, "count": 3500 }
    },
    {
      "id": "006",
      "image": "images/6.jpg",
      "company": "Nike",
      "item_name": "Men ReactX Running Shoes",
      "original_price": 14995,
      "current_price": 14995,
      "discount_percentage": 0,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 3.7, "count": 412 }
    },
    {
      "id": "007",
      "image": "images/7.jpg",
      "company": "The Indian Garage Co",
      "item_name": "Men Slim Fit Regular Shorts",
      "original_price": 1599,
      "current_price": 639,
      "discount_percentage": 60,
      "return_period": 10,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 4.2, "count": 388 }
    },
    {
      "id": "008",
      "item_name": "Men Fresh Deodrant 150ml",
      "image": "images/8.jpg",
      "company": "Nivea",
      "original_price": 285,
      "current_price": 142,
      "discount_percentage": 50,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { "stars": 4.2, "count": 5200 }
    },


  {
      "id":"009",
      "item_name": "Fjallraven-Foldsack, Fits 15 Laptops",
      "current_price": 142,
      "company": "Lenovo",
      "original_price": 109.95,
      "discount_percentage": 20,
      "return_period": 11,
      "delivery_date": "8 Nov 2023",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "stars": 3.9,
          "count": 120
      }
  },
  {
      "id": "010",
      "item_name": "Mens Casual Slim T-Shirts ",
      "current_price": 223,
      "company": "Raymond",
      "original_price": 509.95,
      "discount_percentage": 60,
      "return_period": 17,
      "delivery_date": "1 March 2023",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
          "stars": 4.1,
          "count": 259
      }
  },
  {
      "id": "011",
      "item_name": "Mens Cotton Jacket",
      "current_price": 159.9,
      "company": "Zudio",
      "original_price": 309.95,
      "discount_percentage": 70,
      "return_period": 21,
      "delivery_date": "30 March 2023",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
          "stars": 4.7,
          "count": 500
      }
  },
  {
      "id": "012",
      "item_name": "Mens Casual Slim Fit",
      "current_price": 159.9,
      "company": "Big Bazar",
      "original_price": 309.95,
      "discount_percentage": 45,
      "return_period": 12,
      "delivery_date": "1 Jan 2023",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
          "stars": 2.1,
          "count": 430
      }
  },
  {
      "id": "013",
      "item_name": "Naga Gold Silver DragonChain Bracelet",
      "current_price": 695,
      "company": "Decorun",
      "original_price": 1099.5,
      "discount_percentage": 43,
      "return_period": 15,
      "delivery_date": "5 Oct 2023",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "stars": 4.6,
          "count": 400
      }
  },
  {
      "id": "014",
      "item_name": "Solid Gold Petite Micropave ",
      "current_price": 168,
      "company": "Your Gold",
      "original_price": 309.95,
      "discount_percentage": 35,
      "return_period": 12,
      "delivery_date": "17 Nov 2023",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "stars": 3.9,
          "count": 70
      }
  },
  {
      "id":"015",
      "item_name": "White Gold Plated Princess",
      "current_price": 100,
      "company": "Your Gold",
      "original_price": 179.95,
      "discount_percentage": 43,
      "return_period": 11,
      "delivery_date": "8 Jan 2024",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "stars": 3,
          "count": 400
      }
  },
  {
      "id":"016",
      "item_name": "Pierced Gold Plated Stainless Steel Double",
      "current_price": 109.9,
      "company": "Anamika Gold",
      "original_price": 129.95,
      "discount_percentage": 20,
      "return_period": 11,
      "delivery_date": "8 Nov 2023",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "stars": 1.9,
          "count": 100
      }
  },
  {
      "id": "017",
      "item_name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "current_price": 640,
      "company": "Zebronics",
      "original_price": 1290.95,
      "discount_percentage": 48,
      "return_period": 10,
      "delivery_date": "15 April 2023",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
          "stars": 3.3,
          "count": 203
      }
  },
  {
      "id": "018",
      "item_name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "current_price": 109,
      "company": "Boat ",
      "original_price": 219.95,
      "discount_percentage": 56,
      "return_period": 19,
      "delivery_date": "8 Nov 2023",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
          "stars": 2.9,
          "count": 470
      }
  },
  {
      "id":"019",
      "item_name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "current_price": 299,
      "company": "Lenovo",
      "original_price": 499.9,
      "discount_percentage":38,
      "return_period": 11,
      "delivery_date": "10 March 2023",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
          "stars": 4.8,
          "count": 319
      }
  },
  {
      "id": "020",
      "item_name": "WD 4TB Gaming External Hard Drive",
      "current_price": 114,
      "company": "Zebronics",
      "original_price": 315.04,
      "discount_percentage": 35,
      "return_period": 14,
      "delivery_date": "8 Feb 2023",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
          "stars": 4.8,
          "count": 400
      }
  },
  {
      "id":"021",
      "item_name": "Acer SB220Q bi Full HD IPS Ultra-Thin",
      "current_price": 599,
      "company": "Samsung",
      "original_price": 669.95,
      "discount_percentage": 15,
      "return_period": 11,
      "delivery_date": "8 Nov 2023",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
          "stars": 2.9,
          "count": 250
      }
  },
  {
      "id": "022",
      "item_name": "Samsung 49-Inch Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "current_price": 999.99,
      "company": "Samsung",
      "original_price": 2109.95,
      "discount_percentage": 60,
      "return_period": 7,
      "delivery_date": "16 Nov 2023",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
          "stars": 2.2,
          "count": 140
      }
  },
  {
      "id": "023",
      "item_name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "current_price": 156.99,
      "company": "Winter-Cool",
      "original_price": 259.95,
      "discount_percentage":31,
      "return_period": 10,
      "delivery_date": "8 Nov 2023",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
          "stars": 2.6,
          "count": 235
      }
  },
  {
      "id": "024",
      "item_name": "Women's Removable Moto Biker Jacket",
      "current_price": 829.95,
      "company": "Honda Wear",
      "original_price": 1219.95,
      "discount_percentage": 31,
      "return_period": 17,
      "delivery_date": "30 Nov 2023",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
          "stars": 2.9,
          "count": 340
      }
  },
  {
      "id": "025",
      "item_name": "Rain Jacket Windbreaker Climbing Raincoats",
      "current_price": 1339.99,
      "company": "Mountainuer",
      "original_price": 1809.95,
      "discount_percentage": 27,
      "return_period": 11,
      "delivery_date": "14 Aug 2023",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
          "stars": 3.8,
          "count": 679
      }
  },
  {
      "id":"026",
      "item_name": "MBJ Solid Short Sleeve Boat Neck V ",
      "current_price": 799.85,
      "company": "Lenovo",
      "original_price": 1449.95,
      "discount_percentage": 48,
      "return_period": 11,
      "delivery_date": "8 Nov 2023",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
          "stars": 4.7,
          "count": 130
      }
  },
  {
      "id": "027",
      "item_name": "Opna Women's Short Sleeve Moisture",
      "current_price": 447.95,
      "company": "Lenovo",
      "original_price": 1009.95,
      "discount_percentage": 61,
      "return_period": 10,
      "delivery_date": "7 Jan 2023",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
          "stars": 4.5,
          "count": 146
      }
  },
  {
      "id": "028",
      "item_name": "DANVOUY Womens T Shirt Casual Cotton Short",
      "current_price": 912.99,
      "company": "Lenovo",
      "original_price": 1309.95,
      "discount_percentage": 30,
      "return_period": 12,
      "delivery_date": "8 Nov 2023", 
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
          "stars": 3.6,
          "count": 145
      }
  }
]


// Initialize Express
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get('/items', async (req, res) => {
    res.json({ items: items });
  });
  
  app.get('/items/:id', async (req, res) => {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);
    res.json({ item });
  });
  
  app.post('/items', async (req, res) => {
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: 'Stored new item.', item: newItem });
  });
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
