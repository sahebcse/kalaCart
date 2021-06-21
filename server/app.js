//Library Imports
const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
var multer  = require('multer')

//Connection Data
const PORT=process.env.PORT||5000
const CONNECTION_URL = 'mongodb://localhost/kalakart1'

//Models
const User=require('./models/userModel')
const Blog=require('./models/blogModel')

//Routes
const siteRoutes=require('./routes/siteRoutes')
const userRoutes=require('./routes/userRoutes')
const blogRoutes=require('./routes/blogRoutes')
const paintingRoutes=require('./routes/paintingRoutes')
const testimonialRoutes=require('./routes/testimonialRoutes')
const projectRoutes=require('./routes/projectRoutes')

//Utilities
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

app.use('/', siteRoutes)
app.use('/', blogRoutes)
app.use('/', userRoutes)
app.use('/',paintingRoutes)
app.use('/testimonial',testimonialRoutes)
app.use('/', projectRoutes)

//DB Connection
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>{console.log(`server up and running on port ${PORT}`)}))
    .catch((err)=>{console.log(err.message)});


mongoose.set('useFindAndModify', false);