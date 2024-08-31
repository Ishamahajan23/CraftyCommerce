const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Add a review
router.post('/', reviewController.addReview);

// Get reviews for a product
router.get('/:productId', reviewController.getReviewsByProduct);

// Delete a review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
