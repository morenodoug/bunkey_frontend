import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField"
import ContactsSideBar from "../components/ContactsSideBar"
import { Button , Divider} from '@material-ui/core';
import {drawerWidth} from "../utils/UiConstants"
import {useSelector, useDispatch} from "react-redux"
import {getMessagesByUserId, getChatUser} from "../../features/chat/chatSlice"
import MessageCard from '../components/MessageCard';
import {getUserProfileSelector, getProfile, setProfile} from '../../features/profile/profileSlice'
import { unwrapResult } from '@reduxjs/toolkit'

import {
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },

    content: {
      flexGrow: 1,

      padding: theme.spacing(3),
    },

    chat: {

      height: "80vh",
      padding: 0,
      overflowY: "scroll",
      overflowX: "hidden"
    }    
  }));
export default function MessageApp(props){
    const dispatch = useDispatch()
    const classes = useStyles();

    let history = useHistory();
    let location = useLocation();        
    const chatUserId = useSelector(getChatUser)
    const messages = useSelector(getMessagesByUserId(chatUserId))
    const userProfile = useSelector( getUserProfileSelector)
    const messagesCards = messages.map(message  => <MessageCard  message ={message.message}  isMyMessage={ userProfile.id === message.userId} key={`message-${message.id}`}    />)


    useEffect(() => {
      dispatch(getProfile(null))
      .then(unwrapResult)
      .then((data) =>{

      }).catch(err =>{
        console.error(err)
        let { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);        
      } )
    }, [])


    return(
    <div className={classes.root}>

      <ContactsSideBar/>
      
      <div className={classes.content}>
        <div className={classes.chat}>
          <Grid container direction="column" spacing={3}>
            {messagesCards}
          </Grid>
        </div>
        <Divider  />
        <Grid alignItems="baseline" justify="space-evenly"  container>
            <Grid item sm={8}>
              <TextField
                placeholder="nuevo Mensaje"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item >
              <Button>Enviar</Button>
            </Grid>        
        </Grid>

      </div>


    </div>    
    )

    
}


