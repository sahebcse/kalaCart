import React,{useState} from 'react'
import { Container, Grid, Typography, makeStyles, Paper, TextField, Button, Input } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { createPainting } from '../../../action/user/user'

const useStyles=makeStyles((theme)=>(
{
    inputField: {
        marginTop: theme.spacing(3)
    }
}))

const CreatePainting = () => {
    const classes=useStyles()
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
            <Paper elevation={3} align="center">
                <Grid sm={12} align="center">
                <Typography variant="h4">Add Painting</Typography>
                <form noValidate autoComplete="off" encType='multipart/form-data'>
                    <TextField className={classes.inputField} variant="outlined" fullWidth label="Title" onChange={(e)=>setPainting({...painting,title:e.target.value})}/>
                    <TextField className={classes.inputField} variant="outlined" fullWidth label="Price" onChange={(e)=>setPainting({...painting,price:e.target.value})}/>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        className={classes.inputField}
                        multiline
                        fullWidth
                        rows={4}
                        value={painting.description}
                        onChange={(e)=>{setPainting({...painting,description:e.target.value})}}
                        variant="outlined"
                    />
                    <label>Photo</label>
                    <Input variant="outlined" type="file" name="photo" onChange={handlePhoto}/>
                </form>
                <button onClick={handleSubmit} className="text-black-600 bg-blue-200 my-3 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">Add Painting</button>
                </Grid>
            </Paper>
        </Container>
    )
}

export default CreatePainting
