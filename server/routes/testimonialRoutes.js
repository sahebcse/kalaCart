const express = require('express')
const router=express.Router()

const { getTestimonal, createTestimonial, deleteTestimonial } = require('../controller/testimonialController')
const {isAuthenticated} = require('../middleware/auth')

router.get('/',getTestimonal);

router.post('/', isAuthenticated, createTestimonial);

router.delete('/:id', isAuthenticated, deleteTestimonial);

module.exports = router