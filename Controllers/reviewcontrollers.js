const Review = require('../models/Review');

// Add a review
exports.addReview = async (req, res) => {
    const { productId, userId, rating, comment } = req.body;

    try {
        const review = new Review({
            productId,
            userId,
            rating,
            comment
        });

        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the review' });
    }
};

// Get reviews for a product
exports.getReviewsByProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const reviews = await Review.find({ productId }).populate('userId', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the reviews' });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    const { id } = req.params;

    try {
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        await review.remove();
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the review' });
    }
};
