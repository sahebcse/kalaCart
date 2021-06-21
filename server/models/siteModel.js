const mongoose=require('mongoose')
const Schema=mongoose.Schema

const siteSchema=new Schema({
    hits: {
        type: Number,
        default: 0
    },
    from: {
        type: Date,
        default: Date.now
    }
})


const siteModel=mongoose.model('siteModel', siteSchema)

module.exports=siteModel