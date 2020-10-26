import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';


import {drawerWidth} from "../utils/UiConstants"
import {useSelector} from "react-redux"
import {getUsersSelector, getChatUser} from "../../features/chat/chatSlice"
import UserListItem from "./UserListItem"
import {setChatBoxUser,getChatUserList} from "../../features/chat/chatSlice"
import {useDispatch} from "react-redux"
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

  let history = useHistory();
  let location = useLocation();  
  useEffect(() => {
    dispatch(getChatUserList(null))
    .then(unwrapResult)
    .catch((err) =>{
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from); 
    })

  }, [])
  const  handlerUserClick = (userId) =>{ dispatch(setChatBoxUser(userId)) }

  const userListItems = users.map(user  =>  <UserListItem key={`usercard-${user.id}`} userInfo={user}  isSelected ={ user.id ===chatUserId}  hasNotification={user.hasNotification} onClickProvider ={handlerUserClick} />)
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