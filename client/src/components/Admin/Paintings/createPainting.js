import React,{useState} from 'react'
import { Container, Grid, Typography, Paper, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { createPainting } from '../../../action/user/user'

const CreatePainting = () => {
    const dispatch = useDispatch();
    const defaultPaintingData = {title:'', description:'', price:'', photo:''};

    const [painting, setPainting] = useState(defaultPaintingData);

    const handleSubmit =(e)=> {
        e.preventDefault();
        const data = new FormData();
        data.append('title',painting.title);
        data.append('price',painting.price);
        data.append('description',painting.description);
        data.append('photo',painting.photo);
        dispatch(createPainting(data));
    }

    const handlePhoto=(e)=>
    {
        setPainting({...painting,photo:e.target.files[0]});
    }
    return (
        <Container component="main" maxWidth="sm">
            <Paper elivation={3} align="center">
                <Grid sm={12} md={4} align="center">
                <Typography variant="h4">Add Painting</Typography>
                <form noValidate autoComplete="off" encType='multipart/form-data'>
                    <TextField  label="Title" onChange={(e)=>setPainting({...painting,title:e.target.value})}/>
                    <TextField  label="Price" onChange={(e)=>setPainting({...painting,price:e.target.value})}/>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        
                        multiline
                        rowsMax={4}
                        value={painting.description}
                        onChange={(e)=>{setPainting({...painting,description:e.target.value})}}
                        variant="outlined"
                    />
                    <label>Photo</label>
                    <input type="file" name="photo" onChange={handlePhoto}/>
                </form>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Add</Button>
                </Grid>
            </Paper>
        </Container>
    )
}

export default CreatePainting
