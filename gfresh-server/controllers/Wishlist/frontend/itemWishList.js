const Wishlist = require("../../../Models/wishlist");

const itemWishlist = async (req, res) => {
 try {
   const user_id = req.user.id;
   
   const wishlistItems = await Wishlist
     .find({ user_id })
     .populate("user_id", "name email mobile")
     .populate(
       "product_variant_id",
       "product_name product_image1 selling_price mrp_price product_id"
     )
     .populate(
       "product_id",
       "product_name product_image1 selling_price mrp_price"
     );

   if (wishlistItems.length === 0) {
     return res.status(404).json({ message: "Wishlist is empty" });
   }

   res.status(200).json({ 
     status: "success", 
     data: wishlistItems 
   });
 } catch (error) {
   console.error('Wishlist retrieval error:', error);
   res.status(500).json({ message: "Server error" });
 }
};

module.exports = itemWishlist;