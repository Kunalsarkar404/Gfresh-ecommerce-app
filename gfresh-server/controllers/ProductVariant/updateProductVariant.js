const Variant = require('../../Models/product_variant');
const slugify = require('slugify');

const updateProductVariant = async (req, res) => { 
 try {
   const variantData = {
     ...req.body,
     product_url: slugify(req.body.product_url),
     description: req.body.editor
   };

   // Handle image uploads dynamically
   [1, 2, 3, 4].forEach(i => {
     const imageField = `product_image${i}`;
     if (req.files[imageField]) {
       variantData[imageField] = req.files[imageField][0].filename;
     }
   });

   const updatedVariant = await Variant.findByIdAndUpdate(
     req.params.id, 
     variantData, 
     { new: true }
   );

   if (!updatedVariant) {
     return res.status(404).json({ 
       status: "failed", 
       message: "Product variant not found" 
     });
   }

   res.json({
     status: "success",
     data: updatedVariant
   });
 } catch (error) {
   console.error('Update product variant error:', error);
   res.status(500).json({ 
     status: "failed", 
     errors: error.message 
   });
 }
};

module.exports = updateProductVariant;