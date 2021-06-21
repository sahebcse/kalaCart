const express = require('express')
const router=express.Router()

const { getTestimonal, createTestimonial, deleteTestimonial } = require('../controller/testimonialController')

router.get('/',getTestimonal);

router.post('/:id',createTestimonial);

router.delete('/:id',deleteTestimonial);

module.exports = router