import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import NavigBar from './NavigBar';
import {useSelector} from 'react-redux';

function MainPage(){
	const page=useSelector((state)=> state.pageRoutingReducer);
	return(
		<div>
			<NavigBar/>
			{page ? <Page1/> : <Page2/> }
		</div>
		)

}

export default MainPage;