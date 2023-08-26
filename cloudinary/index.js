const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


          
cloudinary.config({ 
  cloud_name: 'deqtox06j', 
  api_key: '416359172991663', 
  api_secret: 'EKGRq6-YuyEMP55-LefBxbAP-x8' 
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'c24vnwem',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
};