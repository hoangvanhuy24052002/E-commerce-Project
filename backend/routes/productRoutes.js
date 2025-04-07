const express = require('express');
const router = express.Router();
// We'll need to create product controllers later
// const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Basic route to test if it's working
router.get('/', (req, res) => {
  res.json({ message: 'Product routes are working' });
});

// Future routes to implement
// router.get('/', getProducts);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

module.exports = router;