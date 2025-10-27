//The CONTROLLERS folder contains route logic.
// Each controller exports functions that handle requests, typically imported into route files.

// `getAllProducts`, `createOrder`, `deleteUser`

// ---------------------------------------------------------------------
// CONTROLLER EXAMPLE — Gets all products from Supabase
const supabase = require('../supabase/db');

/**
 * GET /api/products
 * Fetches all products from the Supabase "products" table
 */
const getAllProducts = async (req, res) => {
  try {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
      console.error('❌ Error fetching products:', error.message);
      return res.status(500).json({ error: 'Failed to fetch products' });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllProducts
};


// --------------------------------------------------------------------
// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productController');

// GET /api/products
router.get('/', getAllProducts);

module.exports = router;

// -------------------------------------------------------------------
// In server.js, make sure to plug in the route
const productRoutes = require('./src/routes/productRoutes');
app.use('/api/products', productRoutes);

// -----------------------------------------------------------------
// Result
// Visit http://localhost:8080/api/products
// You should see a JSON array of products (if the table exists and has data)