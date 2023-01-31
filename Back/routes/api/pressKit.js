const express = require('express');
const router = express.Router();
const pressKitController = require('../../controllers/pressKitController');
const verifyJWT = require('../../middleware/verifyJWT');

// Multer uploads the file into the back end
const multer = require('multer');
        //Storage Path  :              ./files/pressKit.pdf
let storage = multer.diskStorage({
    destination: './files/',
    filename: function(req, file, cb){
        cb(null, "pressKit.pdf")
    }
});
const upload = multer( {storage: storage} );


router.route('/')
    .get(pressKitController.getPressKit)
    .post(verifyJWT, upload.single('pressKit'), pressKitController.postPressKit)


module.exports = router;