const express = require('express');
const router = express.Router();
const pressKitController = require('../../controllers/pressKitController');

router.route('/')
    .get(pressKitController.getPressKit)
    .post(pressKitController.postPressKit)


module.exports = router;