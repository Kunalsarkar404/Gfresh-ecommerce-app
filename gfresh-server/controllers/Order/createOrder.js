const Order = require("../../Models/order");
const Cart = require("../../Models/cart");
const sendEmail = require("../../middlewares/emailconfig");
const WebsiteInfo = require("../../Models/website_info");

/**
 * Creates a new order, updates cart status, and sends confirmation email with invoice
 * Handles shipping details, payment info, and order tracking
 */
const createOrder = async (req, res) => {
    try {
        const {
            shipping_first_name,
            shipping_last_name,
            shipping_address1,
            shipping_address2,
            shipping_country,
            shipping_state,
            shipping_city,
            shipping_pincode,
            shipping_mobile,
            shipping_email,
            total_amount,
            payment_method,
            payment_status,
            payment_key,
            shipping_charges,
        } = req.body;

        const user_id = req.user.id;

        // Generate unique order ID and validate cart
        const orderCount = await Order.countDocuments();
        const cartItemCount = await Cart.countDocuments({
            user_id,
            orderstatus: "add to cart",
        });
        const orderId = `ORDXXXXX00${orderCount}`;

        // Create and save new order if cart is not empty
        let savedOrder;
        if (cartItemCount > 0) {
            const newOrder = new Order({
                orderid: orderId,
                user_id,
                shipping_first_name,
                shipping_last_name,
                shipping_address1,
                shipping_address2,
                shipping_country,
                shipping_state,
                shipping_city,
                shipping_pincode,
                shipping_mobile,
                shipping_email,
                grand_total_amount: total_amount,
                sub_total_amount: total_amount,
                payment_method,
                payment_status,
                payment_key,
                shipping_charges,
            });
            savedOrder = await newOrder.save();
        }

        // Update cart status and generate invoice email
        await Cart.updateMany(
            { user_id, orderstatus: "add to cart" },
            { $set: { orderstatus: "confirmed", orderid: orderId } }
        );

        const websiteInfo = await WebsiteInfo.find();
        const orderItems = await Cart.find({ orderid: savedOrder.orderid })
            .populate('product_variant_id', 'product_name product_image1 description selling_price mrp_price weight weighttype')
            .populate('product_id', 'product_name product_image1 description selling_price mrp_price weight weighttype');

        // Generate and send invoice email
        const emailHtml = generateInvoiceHtml(savedOrder, orderItems, websiteInfo[0]);
        await sendEmail(
            shipping_email,
            "Order Confirmation",
            "Order Details With Invoice",
            emailHtml
        );

        res.send({ status: "successfully", order: savedOrder });
    } catch (err) {
        console.error(`Error creating order: ${err}`);
        res.send({ status: "failed", errors: err });
    }
};

/**
 * Generates HTML invoice template with order details
 * @private
 */
function generateInvoiceHtml(order, cartItems, websiteInfo) {

    return `<div class="row">
<div class="col-xs-12">
    <div class="container-fluid">
        <table width="99%" border="0" align="center" cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; border: 1px solid #eee;">
            <tbody>
                <tr>
                    <td style="border-bottom: 1px solid #eee; height: 24px; font-size: 14px;" align="center"><strong>TAX INVOICE</strong></td>
                </tr>
                <tr>
                    <td width="50%" valign="top" style="border-bottom: 1px solid #eee; padding: 8px; line-height: 20px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="49%"><strong>Company Name :</strong> ${websiteInfo[0].website_name}<br>
                                        <strong>Address:</strong> Rz-453T-block Dharampura New Delhi - 110043<br>
                                        <strong>Phone no.: </strong>+91${websiteInfo[0].mobile_no}<br>
                                        <strong>Email: </strong>${websiteInfo[0].email}<br>
                                        <strong>GSTIN:</strong> 393idkei39ei39993
                                    </td>
                                    <td width="51%" align="right"><img src="https://gfreshmart.com/wp-content/uploads/2022/01/gfresh-cropped-Transparent.webp" alt="Company Logo" style="width: 150px;"></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="50%" height="24" style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; padding: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;"><strong>SHIPPING ADDRESS</strong></td>
                                    <td width="50%" align="right" style="border-bottom: 1px solid #eee; padding: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;"><strong>Invoice No.: ${savedOrder.orderid}</strong></td>
                                </tr>
                                <tr>
                                    <td width="50%" valign="top" style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; padding: 8px; line-height: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;">
                                        <p>
                                            <strong>Name:</strong> ${order.shipping_first_name}&nbsp;${order.shipping_last_name}<br>
                                            <strong>Address:</strong> ${order.shipping_address1},${order.shipping_address2},${order.shipping_city},${order.shipping_state},${order.shipping_country}-${order.shipping_pincode}<br>
                                            <strong>Phone no.: </strong>${order.shipping_mobile}<br>
                                            <strong>Email: </strong>${order.shipping_email}
                                        </p>
                                    </td>
                                    <td width="50%" align="right" valign="top" style="border-bottom: 1px solid #eee; padding: 8px; line-height: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;">
                                        <p><strong>Date: ${order.order_date}</strong></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee; border-right: 1px solid #eee;">
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="5%" height="24" align="center" style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; background: #CCC; font-family: Arial, Helvetica, sans-serif; font-size: 12px;"><strong>S.NO.</strong></td>
                                    <td style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; background: #CCC; font-family: Arial, Helvetica, sans-serif; font-size: 12px;" width="29%" align="center"><strong>PRODUCT DESCRIPTION</strong></td>
                                    <td width="12%" align="center" style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-family: Arial, Helvetica, sans-serif; font-size: 12px; background: #CCC;"><strong>HSN/ SAC</strong></td>
                                    <td style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-family: Arial, Helvetica, sans-serif; font-size: 12px; background: #CCC;" width="15%" align="center"><strong>Qty</strong></td>
                                    <td style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-family: Arial, Helvetica, sans-serif; font-size: 12px; background: #CCC;" width="15%" align="center"><strong>Price Per Product</strong></td>
                                    <td style="border-bottom: 1px solid #eee; font-family: Arial, Helvetica, sans-serif; font-size: 12px; background: #CCC;" width="12%" align="center"><strong>Total Price</strong></td>
                                </tr>
                                ${cartItems.map((rescart, index) => (
        `<tr>
                                  <td width="5%" height="24" align="center" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>&nbsp;${index + 1}</td>
                                  <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="29%" align="center">&nbsp;${rescart.product_name}</td>
                                  <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="15%" align="center">&nbsp;HSN</td>
                                  <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="15%" align="center">&nbsp;${rescart.product_qty}</td>
                                  <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="12%" align="center">&nbsp;${rescart.product_id == null ? rescart.product_variant_id.selling_price : rescart.product_id.selling_price}</td>
                                  <td style={{ borderBottom: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="12%" align="center">&nbsp;${rescart.product_id == null ? rescart.product_variant_id.selling_price * rescart.product_qty : rescart.product_id.selling_price * rescart.product_qty}</td>
                                </tr>`
    ))}
                                <tr>
                                    <td colspan="3" align="center" style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; background: #CCC; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: bold;">Total</td>
                                    <td colspan="3" style="border-bottom: 1px solid #eee; font-family: Arial, Helvetica, sans-serif; background: #CCC; font-size: 14px; font-weight: bold;" width="15%" align="center">${order.sub_total_amount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="20%" valign="top" style="padding: 8px 6px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; display: flex; justify-content: space-between;">
                                        <strong>Sub Total :</strong> ${order.sub_total_amount} INR
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr style="border-top: 1px solid #eee;">
                                    <td width="20%" valign="top" style="padding: 8px 6px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; display: flex; justify-content: space-between;">
                                        <strong>Shipping Charges :</strong>  ${order.shipping_charges} INR
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr style="border-top: 1px solid #eee;">
                                    <td width="20%" valign="top" style="padding: 8px 6px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; display: flex; justify-content: space-between;">
                                        <strong>Grand Total :</strong> ${order.sub_total_amount} INR
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>`; 
}

module.exports = createOrder;