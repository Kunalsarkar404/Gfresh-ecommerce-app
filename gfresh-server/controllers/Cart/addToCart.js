const Cart = require("../../Models/cart");

const addToCart = async (req, res) => {
 try {
   // Extract cart item details from request body and authenticated user
   const {
     product_name,
     product_id, 
     product_qty,
     product_variant_id,
     item_or_variant
   } = req.body;
   const user_id = req.user.id;

   // Check if item already exists in cart and update quantity if found
   const existingCartItem = await Cart.findOne({
     product_id,
     user_id,
     product_variant_id,
     item_or_variant,
     orderstatus: "add to cart"
   });

   if (existingCartItem) {
     existingCartItem.product_qty += product_qty;
     const updatedItem = await existingCartItem.save();
     
     return res.status(200).json({
       status: "success",
       data: updatedItem
     });
   }

   // Create new cart item if not found
   const newCartItem = new Cart({
     product_name,
     product_id,
     product_qty,
     user_id,
     product_variant_id,
     item_or_variant
   });

   const savedItem = await newCartItem.save();
   
   return res.status(201).json({
     status: "success", 
     data: savedItem
   });

 } catch (error) {
   console.error('Cart addition error:', error);
   return res.status(500).json({
     status: "failed",
     error: error.message
   });
 }
};

module.exports = addToCart;