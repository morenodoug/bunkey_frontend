import React from 'react';
import Grid from "@material-ui/core/Grid"

export default function centerFormContainer(props){

    return(

        <Grid container direction="column" >

            <Grid item container justify="center" >
                <Grid item md={4}  >
                    {props.children}
                </Grid>             
            </Grid>      
        </Grid>
    )
}