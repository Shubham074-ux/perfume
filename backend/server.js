// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/perfume', {})
  .then(() => console.log('Connected to MongoDB'))

// Define Product Schema and Model
const productSchema = new mongoose.Schema({
  avl:String,
 imageUrl: String,
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

// API Endpoint to Fetch Products from db
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
