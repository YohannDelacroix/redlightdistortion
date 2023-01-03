const express = require('express');
const router = express.Router();
const tourController = require('../../controllers/tourController');

router.route('/')
    .get(tourController.getTourDates)
    .post(tourController.addTourDate)
    .delete(tourController.removeTourDate)

module.exports = router;