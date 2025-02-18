const variant = require("../../Models/product_variant");
const productVariantList = async (req, res) => {
    try {
        const productlisting = await variant.find({ product_id: req.params.id });
        res.send({ status: "sucess", data: productlisting })

    } catch (err) {
        console.log(`here is errror ${err}`);
        res.send({ status: "faild", errors: err })

    }


}

module.exports = productVariantList;