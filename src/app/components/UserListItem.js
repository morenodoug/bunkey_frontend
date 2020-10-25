import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import  Divider from "@material-ui/core/Divider"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function  UserListItem(props) {

    const classes = useStyles();
    const {userInfo, isSelected} = props
    const {onClickProvider} = props
  
    return (
        <>
        <ListItem selected={isSelected}>
          <ListItemText primary={userInfo.name} secondary={userInfo.email}  onClick={ (e) => onClickProvider(userInfo.id)} />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
    );

}