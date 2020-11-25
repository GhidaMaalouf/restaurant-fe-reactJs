import { GET_SEARCH,REQUEST_SEARCH } from '../constantTypes';

export const getSearch = (data) =>{
	return({
		type: GET_SEARCH,
		data: data
	})
}

export const requestSearch =(data) =>{
	return ({
		type: REQUEST_SEARCH,
		data:data
	})
}

