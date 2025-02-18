const Wishlist = require("../../Models/wishlist");

const addTowishlist = async (req, res) => {
 try {
   // Extract wishlist item details from request body and authenticated user
   const {
     product_name,
     product_id,
     product_variant_id,
     item_or_variant,
   } = req.body;
   const user_id = req.user.id;

   // Create and save new wishlist entry
   const newWishlistItem = new Wishlist({
     product_name,
     product_id,
     user_id,
     product_variant_id,
     item_or_variant,
   });
   
   const savedItem = await newWishlistItem.save();
   
   return res.status(201).json({ 
     status: "success", 
     data: savedItem 
   });
 } catch (error) {
   console.error('Wishlist addition error:', error);
   return res.status(500).json({ 
     status: "failed", 
     errors: error.message 
   });
 }
};

module.exports = addTowishlist;