import React from 'react';
import VisitedTable from './VisitedTable';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Page2(){
	return(
		<div>
			<AppBar position="static" >
				<Toolbar position="static" style={{justifyContent:"center"}}>
					Visited Restaurants
				</Toolbar>
			</AppBar>
			<VisitedTable/>
		</div>

		)
}

export default Page2;
