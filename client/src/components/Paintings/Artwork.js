import React from 'react'
import { useSelector } from 'react-redux'
import Painting from './painting/Painting'
import {Grid} from '@material-ui/core'

//will put this component only for admin later
import CreatePainting from '../Admin/Paintings/createPainting'

function ArtWork() {
    const user = JSON.parse(localStorage.getItem('profile'));
    const paintings = useSelector((state)=>state.paintings);
    console.log(paintings) 
    return (
        <div>
            {/* conditionally  checking for the admin. to see how it looks and works remove the conditions "user && user.isAdmin"*/}
            {user && user.isAdmin && <CreatePainting />}
            <Grid container>

            {paintings.map((painting)=>{
                return (<Grid key={painting._id} sm={12} md={4}>
                    <Painting painting={painting} user={user}/>
                </Grid>)
            })} 
            </Grid>
        </div>
    )
}

export default ArtWork
