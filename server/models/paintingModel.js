const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})


const paintingSchema =new Schema({
    title: String,
    price:Number,
    description:String,
    numberSelled:Number,
    photo:{
        type:String,
        required:true
    },
    inStock:{
        type:Boolean,
        default:true
    },
    reviews:[reviewSchema]
})

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting