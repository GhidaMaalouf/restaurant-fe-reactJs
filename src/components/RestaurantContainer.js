import Restaurant from './Restaurant';
import { requestAllRestaurants } from '../actions/callRestaurantsAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function RestaurantContainer(){
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(requestAllRestaurants())
	},[])

	return(
		<div> 
		<Restaurant/>
		</div>

		)
}

export default RestaurantContainer;