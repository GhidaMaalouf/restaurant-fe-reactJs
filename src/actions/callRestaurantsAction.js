import { REQUEST_RESTAURANTS,GET_RESTAURANTS } from '../constantTypes';

export const requestAllRestaurants = () => {
	return ({
		type: REQUEST_RESTAURANTS
	})
}

export const getAllRestaurants=(data)=>{
	return({
		type: GET_RESTAURANTS,
		data:data
	})
}