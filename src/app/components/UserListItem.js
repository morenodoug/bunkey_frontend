import React from 'react';



import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Divider from "@material-ui/core/Divider"
import LensIcon from "@material-ui/icons/Lens";




export default function  UserListItem(props) {

    const {userInfo, isSelected , hasNotification} = props
    const {onClickProvider} = props
  
    return (
        <>
        <ListItem selected={isSelected}>
          <ListItemText primary={userInfo.name} secondary={userInfo.email}  onClick={ (e) => onClickProvider(userInfo.id)} />
          <ListItemSecondaryAction hidden={!hasNotification}> 
              <LensIcon />
            </ListItemSecondaryAction>          
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
    );

}