
const mongoose = require("mongoose");
const wishlist = require("../../../Models/wishlist");
const Variant = require("../../../Models/product_variant");
const product = require("../../../Models/product");
const category = require("../../../Models/category");

const fetchCategoryDetails = async (categoryArray) => {
 if (!categoryArray[0]) return [];

 try {
   const categoryIds = categoryArray[0].split(",")
     .map(id => new mongoose.Types.ObjectId(id));
   
   return await category.find({ _id: { $in: categoryIds } });
 } catch (error) {
   console.error('Category fetch error:', error);
   return [];
 }
};

const getFrontendSingleProduct = async (req, res) => {
 try {
   const product = await product.findById(req.params.id);
   if (!product) {
     return res.status(404).json({ error: "Product not found" });
   }

   const user_id = req.user.id || 0;
   const wishlist_status = user_id 
     ? !!(await Wishlist.findOne({ user_id, product_id: req.params.id }))
     : false;

   const [parentcategory, childcategory, productVariants] = await Promise.all([
     fetchCategoryDetails(product.parent_category),
     fetchCategoryDetails(product.child_category),
     Variant.find({ product_id: req.params.id })
   ]);

   const variantIds = productVariants.map(v => v._id);
   const variantWishlistEntries = await wishlist.find(
     user_id === 0 
       ? { product_variant_id: { $in: [] } }
       : { user_id, product_variant_id: { $in: variantIds } }
   );

   const variantWishlistMap = new Map(
     variantWishlistEntries.map(entry => 
       [entry.product_variant_id.toString(), true]
     )
   );

   const variantsWithDetails = productVariants.map(variant => {
     const dynamicAttributes = [
       ...product.dynamicAttributes, 
       ...(variant.dynamicAttributes || [])
     ];

     return {
       ...variant._doc,
       dynamicAttributes,
       wishlist_status: variantWishlistMap.has(variant._id.toString())
     };
   });

   // Remove duplicate attributes
   const uniqueAttributes = Array.from(
     new Map(
       variantsWithDetails
         .flatMap(v => v.dynamicAttributes)
         .map(attr => [JSON.stringify(attr), attr])
     ).values()
   );

   res.json({
     status: "success",
     data: { ...product._doc, wishlist_status },
     parentcategory,
     childcategory,
     productVariant: variantsWithDetails,
     uniqueAttributes,
     slug: product.product_url.replace(/-/g, " ")
   });
 } catch (error) {
   console.error('Product fetch error:', error);
   res.status(500).json({ error: "Server error fetching product details" });
 }
};

module.exports = getFrontendSingleProduct;