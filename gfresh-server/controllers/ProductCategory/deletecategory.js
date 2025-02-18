const Category = require("../../Models/category");

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({
      status: "Category deleted successfully",
      data: deletedCategory
    });
  } catch (err) {
    res.status(500).json({ error: "Error deleting category" });
  }
};

module.exports = deleteCategory;