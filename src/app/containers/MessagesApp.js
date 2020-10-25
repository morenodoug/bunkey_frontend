import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField"
import ContactsSideBar from "../components/ContactsSideBar"
import { Button , Divider} from '@material-ui/core';
import {drawerWidth} from "../utils/UiConstants"
import {useSelector} from "react-redux"
import {getMessagesByUserId, getChatUser} from "../../features/chat/chatSlice"
import MessageCard from '../components/MessageCard';

//const drawerWidth = 300;

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
    const classes = useStyles();
    const chatUserId = useSelector(getChatUser)
    const messages = useSelector(getMessagesByUserId(chatUserId))
    
    const messagesCards = messages.map(message  => <MessageCard  message ={message.message}  key={`message-${message.id}`} />)
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


