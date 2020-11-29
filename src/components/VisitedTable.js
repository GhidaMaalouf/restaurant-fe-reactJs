import {useEffect} from 'react';
import { REQUEST_VISITED_RESTAURANTS } from '../constantTypes';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import { withStyles,makeStyles } from '@material-ui/core/Styles';
import {useSelector, useDispatch} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const style= makeStyles({
    grid:{
        width:'70%',
        margin:'0px'
    }
})

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

function VisitedTable(){
    const classes=style()
    const load=useSelector((state) => state.loadReducer)
    const visit = useSelector((state) => state.visitLogReducer);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch({type: REQUEST_VISITED_RESTAURANTS})
    }, []);
    

    if(load){
        return(
            <Backdrop open>
                <CircularProgress color='inherit'/>
            </Backdrop>
            )}
    else{

	    return(
           
		    <div>
                 <Grid container className={classes.grid} justify="center">
                    <Grid item xs={12} sm={6} align="center">
                	    <TableContainer component={Paper}>
                    	    <Table aria-label="customized table">
                        	    <TableHead>
                        		    <TableRow>
                        			    <Cell align="center"> Name </Cell>
                        			    <Cell align="center"> Visit Date </Cell>
                                    </TableRow>
                        	    </TableHead>
                        	        <TableBody>
                                        {visit.map(log=>(

                                            <Row key={log.id}>
                                                <Cell align="center"> 
                                                        {log.name}                                                
                                                </Cell>
                                                <Cell align="center"> 
                                                        {log.dateFormat}
                                                </Cell>
                                            </Row>
                                        ))}
                            	    </TableBody>
                    	        </Table>
                	    </TableContainer>
                    </Grid>
                </Grid>
            </div>
            
		)}
}

export default VisitedTable;