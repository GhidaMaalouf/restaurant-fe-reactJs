import { React, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Backdrop from '@material-ui/core/Backdrop';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Pagination } from '@material-ui/lab';
import { pageAction } from '../actions/pageAction';
import { addVisitedRest } from '../actions/postVisitedAction';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import uuid from 'react-uuid'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginTop: '3rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1rem'
  },
  media: {
    height: 200,
  },
  grid: {
    width :'100%',
    margin: '0px'
  },
  modalImg:{
    width:"100%"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  card:{
    backgroundColor: theme.palette.primary.light,
    color: "white"
  },
  check :{
    color: theme.palette.secondary.light,
    
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});
const Content = withStyles((theme) => ({
  	root: {
    		padding: theme.spacing(2),
  		  },
	}))(MuiDialogContent);

const Title = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
  		return (
    		<MuiDialogTitle disableTypography className={classes.root} {...other}>
      		<Typography variant="h6"> { children }</Typography>
          {onClose ? (<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>) : null}
        </MuiDialogTitle>
  		      );
	    });



function Restaurant(){
	const classes = useStyles();
    const dispatch = useDispatch();
    
    const allRestaurants = useSelector((state) => state.callRestaurantsReducer);
	
	const load=useSelector((state)=> state.loadReducer);
	
	const show =useSelector((state)=>state.showRestReducer)
	
	const searchedRest=useSelector((state)=>state.searchReducer);
	
	let restaurants=[];
	if (show === true){
        restaurants = allRestaurants;
    }else{
        restaurants = searchedRest;
        dispatch(pageAction(1))
    }

	const currentPageNumb=useSelector((state)=>state.pageReducer);
	const [nbRestPerPage]=useState(4);
	
	const indexLastRest = currentPageNumb * nbRestPerPage;
    const indexOfFirstResto = indexLastRest - nbRestPerPage;
    const currentRestaurants = restaurants.slice(indexOfFirstResto, indexLastRest);

	const paginate = (event, value) => {
      dispatch(pageAction(value))
    }


    const[open,setOpen] =useState(false);
  	const [currentRest,setCurrentRest]= useState({});
  	const clickOpen = () => { 
      setOpen(true); 
    };
  	const handleCurrent=(resto)=>{
    	setCurrentRest(resto)
 	 }
  	const close=()=>{setOpen(false)};

  	const getName=()=>{

  	}

  	const actionChange = (e) => {
       	if (e.target.checked){
            const today =+ new Date();
            let restaurant = { "date": today , "id": uuid(),"restaurantId": e.target.value} ;
            dispatch(addVisitedRest(restaurant));
            console.log(restaurant);
        }
    }


	if(load){
		return(
			<Backdrop className={classes.backdrop} open>
				<CircularProgress color="inherit"/>
			</Backdrop>

			)
	}else{
		return(

		<div>
			<div>
				<Grid container className={classes.grid}>
					{currentRestaurants.map(rest=>(
						<Grid item align="center" xs={12} sm={6} key={rest.id}>
							<Card className={classes.root}>
								<CardActionArea onClick={ () =>{ clickOpen();
																 handleCurrent(rest);}}>
									<CardMedia className={classes.media} image={rest.imagePath}/>
								</CardActionArea>
								<CardActions className={classes.card}>
									<Typography  variant="h5">
										{rest.restaurantName}
									</Typography>
									<FormControl component="fieldset">
                        				<FormGroup aria-label="position" row>
                            				<FormControlLabel id={rest.name} value={rest.id} control={ <Checkbox className={classes.check}/> } label="Tick if visited" labelPlacement="start" onChange={actionChange} />
                        				</FormGroup>
                    				</FormControl>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
			
			<Grid container spacing={0} direction="column" alignItems="center" justify="center">
				<Grid item xs={12}>
              		<Pagination onChange={paginate} showFirstButton showLastButton variant="outlined" shape="rounded"/>
            	</Grid>   
			</Grid>
			<Dialog onClose={close} maxWidth="lg" aria-labelledby="customized-dialog-title" open={open}>
        		<Title id="customized-dialog-title" onClose={close}/>
        		<Content>
                	<Grid container spacing={5}>
                  		<Grid item xs={12} sm={8} >
                  		<img src={currentRest.imagePath} alt={currentRest.restaurantName}/>
                	</Grid>
                
                	<Grid item xs={12} sm={4}>
                  		<Typography variant="h4" component="h4">
                    			{currentRest.restaurantName}
                  		</Typography>
                  			<br/>
                  		<Typography >
                    		Type: {currentRest.restaurantType}
                  		</Typography>
                  			<br/>
                  		<Typography gutterBottom>
                    		Average Cost for Two: ${currentRest.averageCost}
                  		</Typography>
                  			<br/>
                  		<Typography gutterBottom>
                    		Address: {currentRest.address}
                  		</Typography>
                  			<br/>
                  		<Typography gutterBottom>
                    		Phone Number: {currentRest.phoneNumber}
                  		</Typography>
                  			<br/>
                	</Grid>
            	</Grid>
        	</Content>
    	</Dialog>
	</div>	
		)
	}
}
			
export default Restaurant;