import { Container, TextField, Grid, Button, makeStyles } from '@material-ui/core'
import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { createTestimonial } from '../../action/user/user'

export default function TestimonialForm() {
    const dispatch=useDispatch()
    const [name, setName]=useState('')
    const [identity, setIdentity]=useState('')
    const [thoughts, setThoughts]=useState('')
    const user=useSelector((state)=>state.user.authData)
    const handleNameChange=(e)=>
    {
        setName(e.target.value)
    }
    const handleIdentityChange=(e)=>
    {
        setIdentity(e.target.value)

    }
    const  handleThoughtsChange=(e)=>
    {
        setThoughts(e.target.value)
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const data={name, identity, thoughts, email:user?.result.user.email}
        dispatch(createTestimonial(data))
    }

    return (
        <Grid className="py-3" container>
            <Grid sm={3} item></Grid>
            <Grid sm={6} className="bg-white" item>
            <p className="md:text-lg"><b>Add your own!</b></p>
            <form>
                Name <p/>
                <TextField onChange={handleNameChange} variant="outlined" /> <p />
                Identity
                <TextField onChange={handleIdentityChange} fullWidth variant="outlined" />
                Your Thoughts
                <TextField onChange={handleThoughtsChange} fullWidth multiline rows={6} variant="outlined" />
                <button onClick={handleSubmit} className="text-black-600 bg-blue-200 my-3 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">Add Testimonial</button>
            </form>
            </Grid>
            <Grid item sm={3}></Grid>
            
        </Grid>
    )
}
