const Variant = require('../../Models/product_variant');

const deleteProductVariant = async (req, res) => {
    try {
        const deletedVariant = await Variant.findByIdAndDelete(req.params.id);

        res.json({
            status: 'success',
            data: deletedVariant
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete product variant',
            details: error.message
        });
    }
};

module.exports = deleteProductVariant;