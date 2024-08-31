const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add item to cart
router.post('/add', cartController.addItemToCart);

// Remove item from cart
router.post('/remove', cartController.removeItemFromCart);

// Get cart for a user
router.get('/:userId', cartController.getCart);

module.exports = router;
