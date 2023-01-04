const express = require('express');
const router = express.Router();
const lyricsController = require('../../controllers/lyricsController');

router.route('/')
    .get(lyricsController.getLyrics)
    .post(lyricsController.addLyrics)
    .delete(lyricsController.deleteLyrics)
    .put(lyricsController.updateLyrics)

module.exports = router;