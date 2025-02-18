const Wishlist = require("../../Models/wishlist");

const wishlistList = async (req, res) => {
    try {
        const wishlistData = await Wishlist.find()
            .populate('user_id', 'name email mobile')
            .populate('product_id', 'name image1 description weight weighttype');
        
        return res.status(200).json({
            status: "success",
            data: wishlistData
        });
    } catch (error) {
        console.error('Wishlist retrieval error:', error);
        return res.status(500).json({
            status: "failed",
            errors: error.message
        });
    }
};

module.exports = wishlistList;