const Category = require("../../Models/category");
const slugify = require("slugify");

const updateCategory = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file);

        const {
            category_name,
            category_url,
            editor,
            meta_description,
            meta_title,
            meta_keywords,
            parent_category,
            status,
        } = req.body;

        const categoryData = {
            name: category_name,
            url: slugify(category_url),
            desc: editor,
            metatitle: meta_title,
            metadesc: meta_description,
            meta_keywords: meta_keywords,
            status: status,
            parentcategory: parent_category || []
        };

        // Only update the banner image if a new file was uploaded
        if (req.file) {
            categoryData.banner = req.file.path;
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            categoryData,
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({
                status: "failed",
                message: "Category not found"
            });
        }

        res.json({
            status: "successful",
            message: "Category updated successfully",
            data: updatedCategory
        });
    } catch (err) {
        console.error("Category update error:", err);
        res.status(500).json({
            status: "failed",
            errors: err.message
        });
    }
};

module.exports = updateCategory;