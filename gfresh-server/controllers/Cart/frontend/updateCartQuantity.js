const Cart = require("../../../Models/cart");

const updateCartQuantity = async (req, res) => {
 try {
   const { cartItemId, newQuantity } = req.body;
   const user_id = req.user.id;

   const cartItem = await Cart.findOne({
     _id: cartItemId,
     user_id 
   });

   if (!cartItem) {
     return res.status(404).json({
       status: "failed",
       message: "Cart item not found"
     });
   }

   cartItem.product_qty = newQuantity;
   const updatedItem = await cartItem.save();

   return res.status(200).json({
     status: "success",
     data: updatedItem
   });

 } catch (error) {
   console.error('Cart quantity update error:', error);
   return res.status(500).json({
     status: "failed", 
     error: error.message
   });
 }
};

module.exports = updateCartQuantity;