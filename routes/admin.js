const express = require('express');
const adminController = require('../controllers/edit');  // Import the admin controller

const router = express.Router();

// Route to get the 'edit-product' page for a specific product
router.get('/edit-product/:id', adminController.getEditProduct);
router.post('edit-product/:id', adminController.getEditProduct)

// Other admin routes (e.g., product list, etc.)

module.exports = router;