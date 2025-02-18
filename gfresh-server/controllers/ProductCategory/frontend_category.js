const Category = require('../../Models/category');
const mongoose = require('mongoose');

const getFrontendCategoryList = async (req, res) => {
    try {
        const categories = await Category.find({ status: 'Active' });

        const categoriesMap = new Map(
            categories.map(cat => [cat._id.toString(), { ...cat.toObject(), subcategories: [] }])
        );

        const mainCategories = categories.filter(cat =>
            !cat.parentcategory ||
            cat.parentcategory.length === 0 ||
            (cat.parentcategory[0] === '' || cat.parentcategory[0] === null)
        ).map(cat => {
            const currentCategory = categoriesMap.get(cat._id.toString());

            categories
                .filter(subCat =>
                    subCat.parentcategory &&
                    subCat.parentcategory.length > 0 &&
                    subCat.parentcategory[0] !== '' &&
                    mongoose.Types.ObjectId(subCat.parentcategory[0]).equals(cat._id)
                )
                .forEach(subCat => currentCategory.subcategories.push(subCat));

            return currentCategory;
        });

        res.status(200).json({
            status: 'success',
            data: mainCategories
        });
    } catch (error) {
        console.error('Category list fetch error:', error);
        res.status(500).json({
            status: 'failed',
            error: error.message
        });
    }
};

module.exports = getFrontendCategoryList;