const Product = require('../../../Models/product');
const ProductVariant = require('../../../Models/product_variant');

const searchItem = async (req, res) => {
    try {
        // Perform search across product and variant collections
        const searchTerm = req.params.name;
        const searchQuery = {
            $or: [{ product_name: { $regex: searchTerm, $options: "i" } }]
        };

        const [productResults, productVariantResults] = await Promise.all([
            Product.find(searchQuery),
            ProductVariant.find(searchQuery)
        ]);

        // Combine and return search results
        const combinedResults = [...productResults, ...productVariantResults];
        res.json({
            status: "successful",
            results: combinedResults,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Search failed" });
    }
};

module.exports = searchItem;