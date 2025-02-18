const Cart = require("../../Models/cart");

const addToCartList = async (req, res) => { 
 try {
   const user_id = req.user.id;
   
   // Fetch user's cart items with populated details
   const userCart = await Cart.find({ 
     user_id, 
     orderstatus: 'add to cart' 
   })
   .populate('user_id', 'name email mobile')
   .populate('product_variant_id', 'product_name product_image1 description selling_price mrp_price weight weighttype')
   .populate('product_id', 'product_name product_image1 description selling_price mrp_price weight weighttype');

   if (userCart.length === 0) {
     return res.status(404).json({ message: 'User cart is empty' });
   }

   // Calculate cart summary
   const cartSummary = userCart.reduce((summary, cartItem) => {
     const price = cartItem.product_variant_id || cartItem.product_id;
     const quantity = cartItem.product_qty;

     summary.total_Amount_with_discount += quantity * price.selling_price;
     summary.total_Amount_without_discount += quantity * price.mrp_price;
     summary.totalItems += quantity;
     summary.totalDiscount += (price.mrp_price - price.selling_price) * quantity;

     return summary;
   }, {
     total_Amount_with_discount: 0,
     total_Amount_without_discount: 0,
     totalItems: 0,
     totalDiscount: 0
   });

   res.status(200).json({
     data: userCart,
     ...cartSummary
   });
 } catch (error) {
   console.error('Cart retrieval error:', error);
   res.status(500).json({ message: 'Server error' });
 }
};

module.exports = addToCartList;