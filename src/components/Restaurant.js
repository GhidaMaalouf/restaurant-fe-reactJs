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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginTop: '3rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1rem'
  },
  media: {
    height: 140,
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



function Restaurant(){
	const classes = useStyles();
    const dispatch = useDispatch();
    const [currentRests, setCurrentRests] = useState({});
    const allRestaurants = useSelector((state) => state.callRestaurantsReducer);
	const load=useSelector((state)=> state.loadReducer);
	
	const currentPageNumb=useSelector((state)=>state.pageReducer);
	const [numbRestPerPage]=useState(4);
	const paginate = (event, value) => {
      dispatch(pageAction(value))
    }

	if(load){
		return(
			<Backdrop open>
				<CircularProgress color="inherit"/>
			</Backdrop>

			)
	}else{
		return(
		<div>
			<div>
				<Grid container className={classes.grid}>
					{currentRests.map(rest=>(
						<Grid item align="center" xs={12} sm={6} key={rest.id}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia className={classes.media} image={rest.imagePath}/>
								</CardActionArea>
								<CardActions className={classes.card}>
									<Typography  variant="h5">
										{rest.restaurantName}
									</Typography>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
			
			<Grid container spacing={0} direction="column" alignItems="center" justify="center">
				<Grid item xs={12}>
              		<Pagination onChange={paginate} showFirstButton showLastButton variant="outlined" shape="rounded" />
            	</Grid>   
			</Grid>
			
		</div>	
		)
	}
}
			
export default Restaurant;