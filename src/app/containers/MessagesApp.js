import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField"
import ContactsSideBar from "../components/ContactsSideBar"
import { Button , Divider} from '@material-ui/core';
import {drawerWidth} from "../utils/UiConstants"


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
  
    return(
    <div className={classes.root}>

      <ContactsSideBar/>
      
      <div className={classes.content}>
        <div className={classes.chat}>

          <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
          </Typography>
        
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


