import {combineReducers} from 'redux';
import pageRoutingReducer from './pageRoutingReducer';
import searchReducer from './searchReducer';

const rootReducer= combineReducers({
		pageRoutingReducer,
		searchReducer
	});

export default rootReducer;
