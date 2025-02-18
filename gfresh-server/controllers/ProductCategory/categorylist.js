const category = require("../../Models/category")

const categorylist = async (req, res) => {
    try {
        const categories = await category.find().sort({ createdAt: -1 });
        res.send({ status: "successful", data: categories });
    } catch (error) {
        console.log(`here is error ${error}`);
        res.send({ status: "failed", error: error });
    }
}

module.exports = categorylist