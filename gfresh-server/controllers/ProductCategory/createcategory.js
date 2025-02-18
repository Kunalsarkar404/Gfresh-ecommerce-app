const Category = require("../../Models/category");
const slugify = require("slugify");

const createCategory = async (req, res) => {
    try {
        const { 
            category_name, 
            category_url, 
            editor, 
            meta_description, 
            meta_title, 
            meta_keywords, 
            parent_category, 
            status 
        } = req.body;

        // Validate unique name and URL
        const existingNameCategory = await Category.findOne({ name: category_name });
        const existingUrlCategory = await Category.findOne({ url: slugify(category_url) });

        const errors = {};
        if (existingNameCategory) {
            errors.name = {
                message: "Category with this name already exists",
                path: "name"
            };
        }
        if (existingUrlCategory) {
            errors.url = {
                message: "Category with this URL already exists",
                path: "url"
            };
        }

        if (Object.keys(errors).length > 0) {
            return res.status(409).json({
                status: "failed",
                error: errors
            });
        }

        // Require category image
        if (!req.files || !req.files.category_image) {
            return res.status(400).json({
                status: "failed",
                error: { message: "Category image is required" }
            });
        }

        const newCategory = new Category({
            name: category_name,
            url: slugify(category_url),
            desc: editor,
            metatitle: meta_title,
            metadesc: meta_description,
            status,
            meta_keywords: meta_keywords,
            parentcategory: parent_category || [],
            banner: req.files.category_image[0].filename,
        });

        const savedCategory = await newCategory.save();
        res.status(201).json({ 
            status: "successful", 
            data: savedCategory 
        });

    } catch (error) {
        console.error("Category creation error:", error);
        res.status(500).json({ 
            status: "failed", 
            error: error.message 
        });
    }
};

module.exports = createCategory;