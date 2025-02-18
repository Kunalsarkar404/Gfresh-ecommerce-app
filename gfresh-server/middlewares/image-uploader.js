const multer = require("multer");

// Multer configuration for in-memory storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    // Accept only image files (JPEG, PNG, etc.)
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only image files are allowed."), false);
    }
};

const upload = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024 // Limit file size to 2MB
    },
    fileFilter
});

module.exports = upload;
