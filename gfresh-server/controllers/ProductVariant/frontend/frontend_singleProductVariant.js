const Variant = require("../../../Models/product_variant");

const frontendSingleProductVariant = async (req, res) => {
    try {
        // Extract attribute details from request parameters
        const { parentid, attr, attrvalue } = req.params;

        // Construct dynamic condition for attribute matching
        const condition = { [attr]: attrvalue };

        // Find variants matching product ID and specific attribute
        const variants = await Variant.find({
            product_id: parentid,
            dynamicAttributes: {
                $elemMatch: condition
            }
        });

        // Handle case when no variants are found
        if (!variants || variants.length === 0) {
            return res.status(404).json({
                status: "not found",
                message: "Product variant not found"
            });
        }

        // Return successful response with variants
        res.status(200).json({
            status: "success",
            data: variants
        });
    } catch (error) {
        console.error('Product variant fetch error:', error);
        res.status(500).json({
            status: "error",
            message: "Server error fetching product variant"
        });
    }
};

module.exports = frontendSingleProductVariant;