const banner = require("../../Models/banner");

const createbanner = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file);

        const { banner_name, banner_link, banner_alt, status, description, banner_type } = req.body;

        if (!req.file) {
            return res.status(400).json({ status: "failed", error: "No file uploaded" });
        }


        const addbanner = new banner({
            banner_name,
            banner_alt,
            banner_link: banner_link || "",
            banner_type,
            description,
            status,
            banner: req.file.path,
        });

        const data = await addbanner.save();
        res.status(201).json({ status: "successful", message: "Banner added successfully", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "failed", error: error.message });
    }
};

module.exports = createbanner;
