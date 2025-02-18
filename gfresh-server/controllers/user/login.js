const Usertable = require("../../Models/usertable");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const secretKey = '12345678910'

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await Usertable.findOne({email});

        if (!user) {
            return res.status(401).send({message: 'Invalid credentials'});
        }else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send({message: 'Password not match'});
            } else {
                const token = jwt.sign({id: user._id}, secretKey, {expiresIn: '100h'});
                res
                .status(200)
                .send({
                    status: 'successful',
                    message: 'login successful',
                    token: token,
                    user
                });
            }
        }
    }
    catch (errors) {
        res.send({ status: 'failed', error: errors });
        console.log('failed', errors);
    }
}

module.exports = login