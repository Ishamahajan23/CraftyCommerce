const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching products' });
    }
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const products = await Product.find({ category });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching products by category' });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the product' });
    }
};
