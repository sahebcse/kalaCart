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
        height: "0vh",
        alignItems: "flex-end",
        marginRight: "2vh"

    },
    listitem:{
          backgroundColor:"#1b1a1a",
          flexDirection:"column-reverse"
    }
})

function Social() {
    const classes=useStyles()
    return (
        <div>
            <List className={classes.list} >
                <ListItemIcon className={classes.listitem} onClick={()=> console.log(`Icon`)}>
                <IconButton> <FacebookIcon style={{ color: "white" }}/></IconButton>
                <IconButton><TwitterIcon style={{ color: "white" }}/></IconButton>
                <IconButton><InstagramIcon style={{ color: "white" }}/></IconButton>
                <IconButton> <LinkedInIcon style={{ color: "white" }}/></IconButton>                   
                </ListItemIcon>
            </List>
        </div>
    )
}

export default Social
