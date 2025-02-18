const Usertable = require("../../Models/usertable");

const deleteuser = async (req, res) => {
    try {
        const user = await Usertable.findByIdAndDelete(req.params.id);
        res.send({
            status: 'Delete successful',
            data: user
        })
    } catch (error) {
        res
        .status(500)
        .send({error: 'An error occurred while deleting user'});
    }
};

module.exports = deleteuser;