const Testimonial = require('../models/testimonialModel');
const User = require('../models/userModel');

const getTestimonal= async (req,res)=>{
    try {
        const testimonial = await Testimonial.find().populate('user', 'name profilePic');
        res.status(201).json(testimonial)
    } catch (error) {
        consolelog(error)
    }   
}

const createTestimonial= async (req,res)=>{
    try {
        // const id = req.params.id
        const testimonial = await Testimonial.create({
            // user:id,
            testimonial:req.body.testimonial,
        })

        res.status(200).json(testimonial);
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
