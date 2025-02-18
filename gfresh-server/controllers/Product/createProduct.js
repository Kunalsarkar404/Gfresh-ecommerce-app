
const slugify = require("slugify");
const product = require("../../Models/product");

const createProduct = async (req, res) => { 
  try {
    // Destructure product details from request body
    const {
      product_name, product_url, meta_title, meta_keywords, meta_description,
      featuredproduct, trendingproduct, newarrivedproduct, editor,
      parent_category, child_category, sort_description, weight_type,
      weight, stock, mrp_price, selling_price, status, color, brand, size
    } = req.body;

    // Extract and validate product images
    const productImages = req.files ? [
      req.files.product_image1[0].filename,
      req.files.product_image2[0].filename,
      req.files.product_image3[0].filename,
      req.files.product_image4[0].filename
    ] : [];

    // Create new product instance with provided details
    const newProduct = new product({
      product_name,
      sort_description,
      product_url: slugify(product_url),
      product_image1: productImages[0],
      product_image2: productImages[1],
      product_image3: productImages[2],
      product_image4: productImages[3],
      description: editor,
      size,
      color,
      brand,
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
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ status: "success", data: savedProduct });
  } catch (err) {
    console.error("Product creation error:", err);
    res.status(500).json({ status: "failed", errors: err.message });
  }
};

module.exports = createProduct;