const express = require('express');
const router = express.Router();
const pressKitController = require('../../controllers/pressKitController');
const multer = require('multer');
let storage = multer.diskStorage({
    destination: './files/',
    filename: function(req, file, cb){
        cb(null, "test.pdf")
    }
});
const upload = multer( {storage: storage} );


router.route('/')
    .get(pressKitController.getPressKit)
    .post(upload.single('pressKit'), pressKitController.postPressKit)


module.exports = router;