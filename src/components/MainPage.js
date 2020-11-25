import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import NavigBar from './NavigBar';


function MainPage(){
	return(
		<div>
			<NavigBar/>
			<Page1
			></Page1>
			<Page2></Page2>
		</div>
		)

}

export default MainPage;