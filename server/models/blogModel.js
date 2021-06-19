const mongoose=require('mongoose')
const Schema=mongoose.Schema

const commentSchema=new Schema({
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

const blogPostSchema=new mongoose.Schema({
    title: String,
    content: String,
    inShort: String,
    likes: {
        type: Number,
        default: 0
    },
    photo: {
        type: String,
        default: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_grande.png?v=1571606089'
    },
    comments: [commentSchema],
    likedBy: [{type: Schema.Types.ObjectId, ref: 'User'}]
})


const blogPost=mongoose.model('blogPost', blogPostSchema)

module.exports=blogPost