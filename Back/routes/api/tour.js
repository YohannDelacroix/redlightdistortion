const express = require('express');
const router = express.Router();
const tourController = require('../../controllers/tourController');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(tourController.getTourDates)
    .post(verifyJWT, tourController.addTourDate)
    .delete(verifyJWT, tourController.removeTourDate)

module.exports = router;