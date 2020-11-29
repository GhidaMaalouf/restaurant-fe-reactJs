import {combineReducers} from 'redux';
import pageRoutingReducer from './pageRoutingReducer';
import searchReducer from './searchReducer';
import callRestaurantsReducer from './callRestaurantsReducer';
import loadReducer from './loadReducer';
import visitLogReducer from './visitLogReducer';
import pageReducer from './pageReducer';
import showRestReducer from './showRestReducer';
import postVisitedReducer from './postVisitedReducer';
import errorReducer from './errorReducer';

const rootReducer= combineReducers({
		pageRoutingReducer,
		searchReducer,
		callRestaurantsReducer,
		loadReducer,
		visitLogReducer,
		showRestReducer,
		pageReducer,
		postVisitedReducer,
		errorReducer
	});

export default rootReducer;
