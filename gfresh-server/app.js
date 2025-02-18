require('dotenv').config();
const userrouter = require("./routes/userRouter.js");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connectdb = require("./db/connection.js");
const categoryrouter = require("./routes/categoryRouter.js");
const productRouter = require('./routes/productRouter.js');
const variantRouter = require('./routes/variantRouter.js');
const wishlistRouter = require('./routes/wishlistRouter.js');
const cartRouter = require('./routes/cartRouter.js');
const addressRouter = require('./routes/addressRouter.js');
const bannerRouter = require('./routes/bannerRouter.js');
const infoRouter = require('./routes/infoRouter.js');
const orderRouter = require('./routes/orderRouter.js');
const carouselRouter = require('./routes/carousellistRouter.js');

const app = express();
const port = process.env.PORT || 8000;
const database = process.env.MONGODB_URI;
connectdb(database);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
require('./Models/address.js');
require('./Models/cart.js');
require('./Models/category.js');
require('./Models/product.js');
require('./Models/product_variant.js');
require('./Models/usertable.js');
require('./Models/wishlist.js');
require('./Models/banner.js');
require('./Models/order.js');

app.use("/api", infoRouter);
app.use("/api/user", userrouter);
app.use("/api/category", categoryrouter);
app.use("/api/product", productRouter);
app.use("/api/variant", variantRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/banner", bannerRouter);
app.use("/api/order", orderRouter);
app.use("/api/list", carouselRouter);

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
