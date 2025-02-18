const Variant = require('../../Models/product_variant');
const Category = require('../../Models/category');
const mongoose = require('mongoose');

// Fetch category details by ID array
const fetchCategoryDetails = async (categoryArray) => {
    if (!categoryArray[0]) return [];

    try {
        const categoryIds = categoryArray[0].split(',')
            .map(id => new mongoose.Types.ObjectId(id));
        return await Category.find({ _id: { $in: categoryIds } });
    } catch (error) {
        console.error('Category fetch error:', error);
        return [];
    }
};

const getSingleProductVariant = async (req, res) => {
    try {
        const variant = await Variant.findById(req.params.id);

        if (!variant) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Fetch parent and child categories
        const [parentCategories, childCategories] = await Promise.all([
            fetchCategoryDetails(variant.parent_category),
            fetchCategoryDetails(variant.child_category)
        ]);

        res.json({
            status: "success",
            data: variant,
            parentcategory: parentCategories,
            childcategory: childCategories,
            slug: variant.product_url.replace(/-/g, ' ')
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product variant" });
    }
};

module.exports = getSingleProductVariant;