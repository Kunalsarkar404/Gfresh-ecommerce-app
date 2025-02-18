const Order = require("../../Models/order");
const Cart = require("../../Models/cart");

const getSingleOrder = async (req, res) => {
 try {
   // Fetch order details by ID
   const orderDetails = await Order.findById(req.params.id);
   
   if (!orderDetails) {
     return res.status(404).json({ 
       status: "failed",
       message: "Order not found" 
     });
   }

   // Get associated cart items with product details
   const cartItems = await Cart.find({ orderid: orderDetails.orderid })
     .populate('product_variant_id', 
       'product_name product_image1 description selling_price mrp_price weight weighttype')
     .populate('product_id', 
       'product_name product_image1 description selling_price mrp_price weight weighttype');

   return res.status(200).json({
     status: "success",
     data: {
       order: orderDetails,
       items: cartItems
     }
   });

 } catch (error) {
   console.error('Order fetch error:', error);
   return res.status(500).json({
     status: "failed",
     message: "Error fetching order details"
   });
 }
};

module.exports = getSingleOrder;