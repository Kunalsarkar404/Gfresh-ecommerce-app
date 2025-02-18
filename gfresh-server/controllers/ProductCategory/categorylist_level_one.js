const category = require("../../Models/category")

const categorylistlevelone = async (req, res) => {
    try {
        const categories = await category.find({ parentcategory: [] });
        res.send({ status: "successful", data: categories });
    } catch (error) {
        res.send({ status: "failed", error: error });
    }
}

module.exports = categorylistlevelone