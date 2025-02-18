const slugify = require("slugify");
const product = require("../../Models/product");

const updateProduct = async (req, res) => { 
  try {
    const {
      product_name, product_url, meta_title, meta_keywords, meta_description,
      featuredproduct, trendingproduct, newarrivedproduct, editor,
      parent_category, child_category, sort_description, weight_type,
      weight, stock, mrp_price, selling_price, status, color, brand, size
    } = req.body;

    const updateData = {
      product_name,
      sort_description,
      product_url: slugify(product_url),
      description: editor,
      meta_title,
      newarrivedproduct,
      trendingproduct,
      featuredproduct,
      parent_category,
      child_category,
      meta_keywords,
      meta_description,
      weight_type,
      selling_price,
      mrp_price,
      stock,
      status,
      weight,
      size,
      color,
      brand
    };

    // Handle product image updates
    const imageFields = ['product_image1', 'product_image2', 'product_image3', 'product_image4'];
    imageFields.forEach(field => {
      if (req.files && req.files[field]) {
        updateData[field] = req.files[field][0].filename;
      }
    });

    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id, 
      updateData, 
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ 
        status: "failed", 
        message: "Product not found" 
      });
    }

    res.json({ 
      status: "successfully", 
      data: updatedProduct 
    });
  } catch (err) {
    console.error("Product update error:", err);
    res.status(500).json({ 
      status: "failed", 
      errors: err.message 
    });
  }
};

module.exports = updateProduct;