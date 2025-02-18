const Address = require("../../Models/address.js");

const createAddress = async (req, res) => {
 try {
   // Extract address details from request body
   const {
     first_name,
     last_name,
     email,
     mobile,
     pincode,
     city,
     state,
     country,
     address1,
     address2,
   } = req.body;
   const userId = req.user.id;

   // Check if user has any existing addresses
   const existingAddresses = await Address.find({ userId });

   // Set default address flag based on whether this is user's first address
   const defaultaddress = existingAddresses.length === 0;

   // Create and save new address
   const newAddress = new Address({
     first_name,
     last_name,
     email,
     mobile,
     pincode,
     city,
     state,
     country,
     address1,
     address2,
     userId,
     defaultaddress
   });

   const savedAddress = await newAddress.save();

   res.status(201).json({
     status: "success",
     data: savedAddress
   });

 } catch (error) {
   console.error('Address creation error:', error);
   res.status(500).json({
     status: "failed",
     error: error.message
   });
 }
};

module.exports = createAddress;