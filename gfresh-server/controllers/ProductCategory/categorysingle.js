const mongoose = require("mongoose");
const Category = require("../../Models/category");

const getSingleCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        const childCategories = await fetchChildCategories(category.parentcategory);

        res.json({
            status: "success",
            data: category,
            parent: childCategories,
            slug: category.url.replace(/-/g, ' ')
        });
    } catch (err) {
        res.status(500).json({ error: "Error fetching category" });
    }
};

const fetchChildCategories = async (categoryArray) => {
    if (!categoryArray || !categoryArray[0]) return [];

    try {
        const categoryIds = categoryArray[0].split(",")
            .map(id => id.trim())  // Remove any whitespace
            .filter(id => mongoose.Types.ObjectId.isValid(id));  // Validate ObjectId

        if (categoryIds.length === 0) return [];

        const objectIdArray = categoryIds.map(id => new mongoose.Types.ObjectId(id));

        return await Category.find({ _id: { $in: objectIdArray } });
    } catch (error) {
        console.error("Error fetching child categories:", error);
        return [];
    }
};

module.exports = getSingleCategory;