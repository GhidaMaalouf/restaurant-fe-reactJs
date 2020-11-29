import React from 'react';
import SearchBar from'./SearchBar';
import RestaurantContainer from './RestaurantContainer';


function Page1(){
    return(
    	<div>
    		<SearchBar/>
    		<br/>
    		<RestaurantContainer/>
    	</div>
    	)
}

export default Page1;