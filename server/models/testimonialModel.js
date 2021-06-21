const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testimonialSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    identity: String,
    testimonial: String,
    timestamp:{
        type: Date,
        default: Date.now
    }
})

const testimonialModel = mongoose.model('Testimonial', testimonialSchema);

module.exports = testimonialModel;