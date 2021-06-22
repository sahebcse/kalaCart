import React from 'react'
import {Typography,Drawer,AppBar,Toolbar,Button} from '@material-ui/core'
import {List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {useHistory}  from 'react-router-dom'




const useStyles=makeStyles({
    title:{
        width:'100%',
        textAlign:"left"
    },
    list:{
        display:"flex"
    }
})

function Layout() {
    const classes=useStyles()
    const history=useHistory()
    const menuItems=[
        {
            text:"Home",
            path:"/"
        },
        {
            text:"About",
            path:"/About"
        },
        {
            text:"Artworks",
            path:"/Artwork"
        },
        {
            text:"blog",
            path:"/Blog"
        },
        {
            text:"testimonial",
            path:"/Testimonial"
        },
        {
            text:"contact",
            path:"/Contact"
        }
    ]
  
    return (
        <div>
         <AppBar>
             <Toolbar>
                 <Typography className={classes.title}>
                     KalaCart
                 </Typography>
                 <List className={classes.list}>
                     {menuItems.map((item)=>(<ListItem button key={item.text} 
                       onClick={()=> history.push(item.path)}>
                         <ListItemText primary={item.text.toUpperCase()}/>
                     </ListItem>))}          
                 </List>
                 <Button variant="contained"> Login</Button>
             </Toolbar>
         </AppBar>
        </div>
    )
}

export default Layout
