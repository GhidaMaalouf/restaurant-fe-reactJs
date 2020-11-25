import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button'
import {ROUTING_PAGE1,ROUTING_PAGE2} from '../constantTypes';


function NavigBar(){
    //const dispatch=useDispatch();
    return(
        <div>
            <AppBar position="static">
                <Toolbar color="primary">
                    <Grid container>
                        <Grid item xs={6} sm={12}>
                            <Grid container>
                                <Button > Page 1 </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={12}>
                            <Grid container>
                                <Button >
                                    Page 2
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavigBar;