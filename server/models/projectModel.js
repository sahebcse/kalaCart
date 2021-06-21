const mongoose=require('mongoose')
const Schema=mongoose.Schema

const projectSchema=new Schema({
    title: String,
    from: Date,
    to: Date,
    description: String,
    likes: {
        type: Number,
        default: 0
    },
    photo: {
        type: String,
        default: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_grande.png?v=1571606089'
    }
})




const Project=mongoose.model('Project', projectSchema)

module.exports=Project