const Usertable = require("../../Models/usertable");

const updateuser = async (req, res) => {
    const userId = req.params.id;
    try {
        const updateUser = await Usertable.findByIdAndUpdate(userId, req.body, {new: true});
        if (!updateUser) {
            return res.status(404).json({status: "failed", message: "User not found"});
        }
        res.json({status: 'successfully updated', data: updateUser});
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({status: 'failed', error: error.message});
    }
};

module.exports = updateuser;