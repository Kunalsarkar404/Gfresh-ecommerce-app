const Order = require("../../Models/order");
const Cart = require("../../Models/cart");

const orderlistbyuser = async (req, res) => {
  try {
    const user_id = req.user.id;
    const orderlist = await Order.find({ user_id });

    if (!orderlist || orderlist.length === 0) {
      return res.status(200).json({ status: 0, message: "No Orders Found", orderlist: [] });
    }

    // Transform orders and calculate total items from cart for each order
    const ordersWithTotalItems = await Promise.all(
      orderlist.map(async (order) => {
        const cartinfo = await Cart.find({ orderid: order.orderid });
        const totalItems = cartinfo.reduce(
          (sum, item) => sum + item.product_qty,
          0
        );

        return {
          order_id: order.orderid,
          user_name: order.user_name,
          order_date: order.order_date,
          order_status: order.order_status,
          grand_total_amount: order.grand_total_amount,
          totalItems
        };
      })
    );

    res.status(200).json({ status: 1, orderlist: ordersWithTotalItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = orderlistbyuser;