const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name: String,
    age: Number,
    email: String,
    isAdmin: {
        type: Boolean,
        default: true
    },
    profilePic:{
        type:String,
    },
    password: String,
    boughtPaintings:[{type: Schema.Types.ObjectId, ref:'Painting'}]
})

const User=mongoose.model('User', userSchema)
module.exports=User