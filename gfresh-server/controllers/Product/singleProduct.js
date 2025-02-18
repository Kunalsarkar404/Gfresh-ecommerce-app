const Product = require("../../Models/product");
const Category = require("../../Models/category");
const mongoose = require("mongoose");

const fetchRelatedCategories = async (categoryArray) => {
  if (!categoryArray || !categoryArray[0]) return [];

  try {
    const categoryIds = categoryArray[0]
      .split(",")
      .map(id => id.trim())
      .filter(id => mongoose.Types.ObjectId.isValid(id));

    if (categoryIds.length === 0) return [];

    const objectIdArray = categoryIds.map(id => new mongoose.Types.ObjectId(id));
    return await Category.find({ _id: { $in: objectIdArray } });
  } catch (error) {
    console.error("Category fetching error:", error);
    return [];
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const productData = await Product.findById(id);
    
    if (!productData) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const parentCategories = await fetchRelatedCategories(productData.parent_category);
    const childCategories = await fetchRelatedCategories(productData.child_category);

    res.json({ 
      status: "success", 
      data: productData,
      parentCategories,
      childCategories,
      slug: productData.product_url.replace(/-/g, ' ')
    });
  } catch (error) {
    console.error('Product retrieval error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = getSingleProduct;