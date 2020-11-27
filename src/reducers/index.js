import {combineReducers} from 'redux';
import pageRoutingReducer from './pageRoutingReducer';
import searchReducer from './searchReducer';
import callRestaurantsReducer from './callRestaurantsReducer';

const rootReducer= combineReducers({
		pageRoutingReducer,
		searchReducer,
		callRestaurantsReducer
	});

export default rootReducer;
