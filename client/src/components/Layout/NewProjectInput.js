import React,{useState} from 'react'
import {Typography,TextField,Card,CardContent} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/styles'





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
        paddingTop:'10vh',
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
    const classes=useStyles()
 
    const [projectTitle,setProjectTitle]=useState('');
    const [projectDescription,setProjectDescription]=useState('');
    const [titleError,setTitleError]=useState(false);
    const [descriptionError,setDescriptionError]=useState(false);
    

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
          console.log(projectDescription,projectTitle); 
        }
    }
  return (
    <Container>
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
      multiline
      rows={4}
      fullWidth
      required
      error={descriptionError}
    
      />
     <Button  type="submit" variant="contained" color="primary" size="small"
      startIcon={<SendIcon/>}
      className={classes.btn}
      >Submit</Button>
    </form>
    </CardContent>
    </Card>
    </Container>
    )
}

export default NewProjectInput
