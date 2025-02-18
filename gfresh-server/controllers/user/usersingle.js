const user = require("../../Models/usertable");

const usersingle = async (req, res) => {
    const userId = req.params.id;
    try {
        const userdetail = await user.findById(userId);
        if (!userdetail) {
            return res.status(404).send({ error: 'user detail not found' });
        }
        res.status(200).send({ status: "successfully", data: userdetail });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching userdetail', servererror: error })
    }
}

module.exports = usersingle