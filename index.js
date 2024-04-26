const express = require("express");
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/item');

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
   res.json({message:"true"});
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
