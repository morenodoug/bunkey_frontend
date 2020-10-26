import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


import { yellow , cyan} from '@material-ui/core/colors';

const myMessageColor = yellow[100];
const  notMyMessageColor = cyan[100]

const myMessageStyle = makeStyles({
  root: {

    backgroundColor:myMessageColor,
    margin:"8px"
  },

});

const notMyMessageStyle = makeStyles({
    root: {
  
      backgroundColor:notMyMessageColor,
      margin:"8px"
    },
  
  });

export default function MessageCard(props) {

    const {isMyMessage , message} = props
    const notMyMessageClasses = notMyMessageStyle()
    const myMessageClasses = myMessageStyle();
    return (
      <Card className={ (isMyMessage) ? myMessageClasses.root  : notMyMessageClasses.root} variant="outlined">
        <CardContent>
          <Typography variant="body2" component="p">
            {message}
          </Typography>
        </CardContent>
  
      </Card>
    );
  }
