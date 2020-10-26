import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Divider from "@material-ui/core/Divider"
import LensIcon from "@material-ui/icons/Lens";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function  UserListItem(props) {

    const classes = useStyles();
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