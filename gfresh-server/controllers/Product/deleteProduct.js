const Product = require('../../Models/product');

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    res.json({
      status: 'success',
      data: deletedProduct
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to delete product',
      details: error.message 
    });
  }
};

module.exports = deleteProduct;