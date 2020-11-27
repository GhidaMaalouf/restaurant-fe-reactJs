import { GET_RESTAURANTS } from '../constantTypes';

const initialState=[];

const callRestaurantsReducer = (state=initialState,action) =>{
	switch(action.type){
		case GET_RESTAURANTS:
			return action.data;
		default:
			return state;
	}
}

export default callRestaurantsReducer;