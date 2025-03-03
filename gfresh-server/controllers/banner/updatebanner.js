const banner = require("../../Models/banner");

const updatebanner = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file);
        
        const { banner_name, banner_link, banner_alt, status, description, banner_type } = req.body;

        // Prepare update object
        let bannerobj = {
            banner_name,
            status,
            description,
            banner_type,
            banner_link,
            banner_alt
        };

        // Only update the banner image if a new file was uploaded
        if (req.file) {
            bannerobj.banner = req.file.path;
        }

        const updatedbanner = await banner.findByIdAndUpdate(
            req.params.id, 
            bannerobj, 
            { new: true }
        );

        if (!updatedbanner) {
            return res.status(404).json({ 
                status: "failed", 
                message: "Banner not found" 
            });
        }

        res.status(200).json({ 
            status: "successful", 
            message: "Banner updated successfully", 
            data: updatedbanner 
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ 
            status: "failed", 
            error: error.message 
        });
    }
};

module.exports = updatebanner;