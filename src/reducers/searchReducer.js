import { GET_SEARCH } from '../constantTypes';

const initialState=[];

const searchReducer = (state=initialState,action) =>{
	switch(action.type){
		case GET_SEARCH:
			return action.data;
		default:
			return state;
	}
}
export default searchReducer;
