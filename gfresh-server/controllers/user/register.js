const Usertable = require("../../Models/usertable");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const secretKey = '12345678910'

const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const { first_name, last_name, dob, email, mobile, password } = req.body;
        const bcrypt_password = await bcrypt.hash(password, salt);
        const createuser = new Usertable({
            first_name,
            last_name,
            email,
            dob,
            mobile,
            password: bcrypt_password,
        });

        const response = await createuser.save();
        const token = jwt.sign({ id: response.id }, secretKey, { expiresIn: '1h' });

        res.send({ status: "sucessful", data: response, token: token });
    }
    catch (errors) {
        res.send({ status: 'failed', error: errors });
        console.log('failed', errors);
    }
}

module.exports = register