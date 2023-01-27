const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: { type: String, required: true},
    place_geo: { type: String, required: true},
    place_name: { type: String, required: true},
    ticket_link: { type: String},
    more_link: { type: String}
})

module.exports = mongoose.model('Tour', tourSchema);