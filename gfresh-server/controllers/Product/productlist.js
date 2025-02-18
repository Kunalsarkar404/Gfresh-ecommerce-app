const product = require("../../Models/product");
const productlist = async (req, res) => {
    try {
        const productlisting = await product.find();
        res.send({ status: "sucessfully", data: productlisting })

    } catch (err) {
        console.log(`here is errror ${err}`);
        res.send({ status: "failed", errors: err })
    }
}

module.exports = productlist