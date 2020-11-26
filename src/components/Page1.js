import React from 'react';
import SearchBar from'./SearchBar';
import RestaurantContainer from './RestaurantContainer';
import ModalDialog from './ModalDialog';

function Page1(){
    return(
    	<div>
    		<SearchBar/>
    		<RestaurantContainer/>
    	</div>
    	)
}

export default Page1;