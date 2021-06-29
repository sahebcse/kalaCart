import React,{useState} from 'react'
import {Typography,TextField,Card,CardContent} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/styles'
import { useDispatch} from 'react-redux';
import { createProject} from '../../../action/user/user'


const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth:500,
      maxHeight:300,
      position:"relative",
      borderRadius:'40px',
      backgroundColor:"#ffffff",
      textAlign:"center",
    },
    body:{
        paddingTop:'12vh',
    },
    btn:{
        marginTop:5,
        fontSize:12,       
        '&:hover':{
          background:"#34eb98"
        }
      },
      title:{
        textDecoration:"bold",marginBottom:20
      },
      field:{
        marginTop:20,
        marginButtom: 20,
        display:"block"
      }
  }));


  

function NewProjectInput() {
    const dispatch = useDispatch();
    const classes=useStyles()
    const [photo, setPhoto] = useState('')
    const [projectTitle,setProjectTitle]=useState('');
    const [projectDescription,setProjectDescription]=useState('');
    const [titleError,setTitleError]=useState(false);
    const [descriptionError,setDescriptionError]=useState(false);
    

    const handlePhoto=(e)=>
    {
        setPhoto(e.target.files[0]);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setTitleError(false);
        setDescriptionError(false);
        if(projectTitle==='')
        {
          setTitleError(true);
        }
        if(projectDescription==='')
        {
          setDescriptionError(true);
        }
    
        if(projectTitle && projectDescription)
        {
          const data = new FormData();
          data.append('title', projectTitle);
          data.append('description', projectDescription);
          data.append('photo', photo)
          dispatch(createProject(data)) 
        }
    }
  return (
    <Container className={classes.body}>
    <Card className={classes.card}>
    <CardContent >
      <Typography variant="h6"
    color="textSecondary" className={classes.title}
    component ="h2">
      Add a New Project
    </Typography>
    <form noValidate autoComplete="off" onSubmit={handleSubmit} >
      <TextField
      onChange={(e)=>setProjectTitle(e.target.value)}
      className={classes.field}
      label="Project title"
      variant="outlined"
      color="secondary"
      size="small"
      fullWidth
      required
      error={titleError}
      />
      <TextField 
       onChange={(e)=>setProjectDescription(e.target.value)}
      className={classes.field}
      label="Project Description"
      variant="outlined"
      color="secondary"
      size="small"
      multiline
      rows={4}
      fullWidth
      required
      error={descriptionError}
    
      />

    <label>Photo</label>
    <input type="file" name="photo" onChange={handlePhoto}/>
     <Button  type="submit" variant="contained" color="primary" size="small"
      startIcon={<SendIcon/>}
      className={classes.btn}
      >Upload</Button>
    </form>
    </CardContent>
    </Card>
    </Container>
    )
}

export default NewProjectInput
