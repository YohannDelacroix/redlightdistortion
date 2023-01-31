const express = require('express');
const router = express.Router();
const lyricsController = require('../../controllers/lyricsController');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(lyricsController.getLyrics)
    .post(verifyJWT, lyricsController.addLyrics)
    .delete(verifyJWT, lyricsController.deleteLyrics)
    .put(verifyJWT, lyricsController.updateLyrics)

module.exports = router;