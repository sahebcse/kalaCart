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
    numberSelled:{
        type:Number,
        default:0
    },
    photo:{
        type:String,
        required:true
    },
    photo2:{
        type:String,
    },
    photo3:{
        type:String,
    },
    inStock:{
        type:Boolean,
        default:true
    },
    reviews:[reviewSchema],
    theme:{
        type:String,
        default:'Abstract'
    },
    creationTime:{
        type:Date,
        default: Date.now
    }

})

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting