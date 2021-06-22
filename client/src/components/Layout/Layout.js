import React from 'react'
import {Typography,Drawer,AppBar,Toolbar,Button} from '@material-ui/core'
import {List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'



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
    const menuItems=[
        {
            text:"Home",
            path:"/"
        },
        {
            text:"About",
            path:"/about"
        },
        {
            text:"Artworks",
            path:"/art"
        },
        {
            text:"blog",
            path:"/blog"
        },
        {
            text:"testimonial",
            path:"/testimonial"
        },
        {
            text:"contact",
            path:"/contact"
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
                     {menuItems.map((item)=>(<ListItem button key={item.text}>
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
