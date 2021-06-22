import React from 'react'
import {List,IconButton,ListItemIcon} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
    
    list:{
        paddingTop: '0',
        position: "relative",
        display: "flex",
        flexDirection:"column-reverse",
        height: "100vh",
        alignItems: "flex-end"

    },
    listitem:{
          backgroundColor:"#555",
          flexDirection:"column-reverse"
    }
})

function Social() {
    const classes=useStyles()
    return (
        <div>
            <List className={classes.list} >
                <ListItemIcon className={classes.listitem}>
                <IconButton> <FacebookIcon/></IconButton>
                <IconButton><TwitterIcon/></IconButton>
                <IconButton><InstagramIcon/></IconButton>
                <IconButton> <LinkedInIcon/></IconButton>                   
                </ListItemIcon>
            </List>
        </div>
    )
}

export default Social
