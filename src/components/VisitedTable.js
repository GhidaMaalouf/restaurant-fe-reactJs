import React, {useEffect} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/Styles';

function VisitedTable(){
	const Cell = withStyles((theme) => ({
          head: {
                    backgroundColor: "#eceff1",
                    color: "black",
                },
            body: {
                    fontSize: 14,
                  },
        }))(TableCell);

    const Row =withStyles((theme)=>({
        root: {
            '&:nth-of-type(odd)' : {
                backgroundColor:'white',
                
            },
        },
        }))(TableRow);

	return(
		<div>
             <Grid container justify="center">
                <Grid item xs={11} sm={5} align="center">
                	<TableContainer >
                    	<Table aria-label="customized table">
                        	<TableHead>
                        		<TableRow>
                        			<Cell align="center"> Name </Cell>
                        			<Cell align="center"> Visit Date </Cell>

                        		</TableRow>
                        	</TableHead>
                        	<TableBody>
                            	<Row>
                                    <Cell align="center"> Name
                                    </Cell>
                                    <Cell align="center"> Date
                                    </Cell>
                                </Row>
                        	</TableBody>
                    	</Table>
                	</TableContainer>
                </Grid>
            </Grid>
        </div>
		)
}

export default VisitedTable;