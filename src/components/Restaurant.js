import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

function Restaurant(){
	return(
	<div>
		<Grid container>
			<Grid item align="center" xs={12} sm={6}>
				<Card >
					<CardActionArea>
							<Typography> Image </Typography>
						<CardMedia />
					</CardActionArea>
					<CardActions>
						<Typography  variant="h5">
							Burger house
						</Typography>
						
					</CardActions>

				</Card>
			</Grid>
		</Grid>
	</div>)
}

export default Restaurant;