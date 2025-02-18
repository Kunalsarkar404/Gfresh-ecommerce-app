const jwt = require("jsonwebtoken");
const secretKey = '12345678910';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ status: 'failed', errors: 'Unauthorized: Missing or invalid token' });
    }

    const token = authHeader.slice(7).replace(/"/g, ''); // Remove 'Bearer ' from the beginning

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: "failed", errors: "Unauthorized: Invalid token", token });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;