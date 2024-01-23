const cloudinary = require("cloudinary").v2;
// Configuration
cloudinary.config({
  cloud_name: "dsquo5jdb",
  api_key: "442863463119917",
  api_secret: "BwfW6n3l8es28vxiU6FClzBTTL0",
});

const imageUploader = async (req, res) => {
  
};

module.exports = { imageUploader };
