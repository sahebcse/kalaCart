const Testimonial = require('../models/testimonialModel');
const User = require('../models/userModel');

const getTestimonal= async (req,res)=>{
    try {
        const testimonial = await Testimonial.find().populate('user');
        res.status(201).json(testimonial)
    } catch (error) {
        consolelog(error)
    }   
}

const createTestimonial= async (req,res)=>{
    console.log(req.body)
    console.log(req.body.user.result.googleId)
    const user = await User.findOne({googleId:req.body.user.result.googleId});
    //console.log(user)
    
    try {
        // const id = req.params.id
        const testimonial = await Testimonial.create({
            user: user._id,
            testimonial: req.body.thoughts,
            identity: req.body.identity
        })
        await testimonial.populate('user').execPopulate()
        return res.json(testimonial)
    } catch (error) {
        console.log(error)
    }
}

const deleteTestimonial= async (req,res)=>{
    try {
        const id = req.params.id
        await Testimonial.findByIdAndDelete(id)
        res.status(201).json({message:'success'});
    } catch (error) {
        consolelog(error)
    }
}

module.exports = { getTestimonal, createTestimonial, deleteTestimonial }
