const website_info = require("../../Models/website_info");

const editwebinfo = async (req, res) => {
    try {
        // Destructure request body
        const {
            website_name,
            mobile_no,
            address,
            email,
            facebook,
            instagram,
            youtube,
            twitter,
            pinterest,
            gstno,
        } = req.body;

        // Prepare update data
        let updatedate = {
            website_name,
            mobile_no,
            address,
            email,
            facebook,
            instagram,
            youtube,
            twitter,
            pinterest,
            gstno,
        };

        // Handle logo upload
        if (req.files && req.files.logo) {
            updatedate.logo = req.files.logo[0].filename;
        }

        // Find the first document to update
        const existingDoc = await website_info.findOne();

        if (!existingDoc) {
            return res.status(404).json({ 
                status: "failed", 
                message: "No website info record found" 
            });
        }

        // Update the document
        const data = await website_info.findByIdAndUpdate(
            existingDoc._id,
            updatedate,
            { new: true }
        );

        res.status(200).json({ 
            status: "successfully updated", 
            data: data 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            status: "failed", 
            errors: err.message 
        });
    }
};

module.exports = editwebinfo;