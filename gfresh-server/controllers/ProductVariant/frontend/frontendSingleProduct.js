const Product = require("../../../Models/product");
const Variant = require("../../../Models/product_variant");

const frontendSingleProduct = async (req, res) => {
    try {
        // Fetch product's dynamic attributes
        const product = await Product.findById(req.params.id)
            .select("dynamicAttributes");

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Fetch product variants' dynamic attributes
        const productVariants = await Variant
            .find({ product_id: req.params.id })
            .select("dynamicAttributes");

        // Combine and process dynamic attributes
        const combinedAttributes = [
            ...(product.dynamicAttributes || []),
            ...productVariants.flatMap(variant => variant.dynamicAttributes || [])
        ];

        // Group attributes by their key
        const groupedAttributes = combinedAttributes.reduce((acc, subArray) => {
            subArray.forEach(obj => {
                const key = Object.keys(obj)[0];
                acc[key] = acc[key] || [];
                acc[key].push(obj);
            });
            return acc;
        }, {});

        // Convert grouped attributes to array for response
        const variantTypes = Object.values(groupedAttributes);

        res.status(200).json({
            status: "success",
            varianttype: variantTypes
        });
    } catch (error) {
        console.error('Variant attributes fetch error:', error);
        res.status(500).json({ error: "Server error fetching variant attributes" });
    }
};

module.exports = frontendSingleProduct;