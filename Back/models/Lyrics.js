const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lyricsSchema = new Schema({
    title: {type: String, required: true},
    description: [{type: String}],
    lyrics_en: [{type: String}]
})

module.exports = mongoose.model('Lyrics', lyricsSchema);