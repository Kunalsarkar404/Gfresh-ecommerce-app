const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folderName = "general";

    if (req.body.imageType === "banner") {
      folderName = "banners";
    } else if (req.body.imageType === "product") {
      folderName = "products";
    } else if (req.body.imageType === "category") {
      folderName = "categories";
    }

    return {
      folder: folderName,
      allowed_formats: ["jpg", "png", "jpeg", "webp"],
      transformation: [{ width: 800, height: 400, crop: "limit" }],
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});

const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 }});

module.exports = upload;
