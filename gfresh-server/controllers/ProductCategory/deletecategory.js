const Category = require("../../Models/category");
const cloudinary = require("../../middlewares/cloudinaryConfig");

const deleteCategory = async (req, res) => {
  try {
    // Find the category first to get access to the banner URL
    const category = await Category.findById(req.params.id);
    
    if (!category) {
      return res.status(404).json({ 
        status: "failed",
        message: "Category not found" 
      });
    }
    
    // Delete the associated image from Cloudinary if it exists
    if (category.banner) {
      try {
        // Extract public_id from the Cloudinary URL
        const publicId = getPublicIdFromUrl(category.banner);
        if (publicId) {
          await cloudinary.uploader.destroy(publicId);
          console.log(`Deleted image: ${publicId}`);
        }
      } catch (deleteErr) {
        console.error("Error deleting image from Cloudinary:", deleteErr);
        // Continue with category deletion even if image deletion fails
      }
    }
    
    // Now delete the category from the database
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    
    res.json({
      status: "successful",
      message: "Category deleted successfully",
      data: deletedCategory
    });
  } catch (err) {
    console.error("Category deletion error:", err);
    res.status(500).json({ 
      status: "failed",
      message: "Error deleting category",
      error: err.message 
    });
  }
};

// Helper function to extract public_id from Cloudinary URL
function getPublicIdFromUrl(url) {
  try {
    // Example URL: https://res.cloudinary.com/cloud_name/image/upload/v1234567890/categories/image_name.jpg
    const urlParts = url.split('/');
    // Find the upload part and get everything after it
    const uploadIndex = urlParts.findIndex(part => part === 'upload');
    if (uploadIndex !== -1 && uploadIndex + 2 < urlParts.length) {
      // Skip the version number by starting from uploadIndex + 2
      const publicIdWithExtension = urlParts.slice(uploadIndex + 2).join('/');
      // Remove file extension
      return publicIdWithExtension.split('.')[0];
    }
    return null;
  } catch (error) {
    console.error("Error extracting public ID:", error);
    return null;
  }
}

module.exports = deleteCategory;