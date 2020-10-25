import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';


import {drawerWidth} from "../utils/UiConstants"
import {useSelector} from "react-redux"
import {getUsersSelector, getChatUser} from "../../features/chat/chatSlice"
import UserListItem from "./UserListItem"
import {setChatBoxUser} from "../../features/chat/chatSlice"
import {useDispatch} from "react-redux"


// const drawerWidth = 300;

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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default  function  ContactsSideBar( props ) {
  const dispatch = useDispatch()  
  const classes = useStyles();
  const  users = useSelector(getUsersSelector)
  const chatUserId = useSelector(getChatUser)

  const  handlerUserClick = (userId) =>{ dispatch(setChatBoxUser(userId)) }

  const userListItems = users.map(user  =>  <UserListItem key={`usercard-${user.id}`} userInfo={user}  isSelected ={ user.id ===chatUserId}  onClickProvider ={handlerUserClick} />)
  return(
      
      <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
          paper: classes.drawerPaper,
          }}
          anchor="left"
      >
      <div className={classes.toolbar} />
      <Divider />
      <List>
          {userListItems}
      </List>
      <Divider />

  </Drawer>   
  ) 


}