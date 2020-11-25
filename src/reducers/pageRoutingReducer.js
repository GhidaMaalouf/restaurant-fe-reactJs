import {ROUTING_PAGE1,ROUTING_PAGE2} from '../constantTypes';

const initialState=true;

const pageRoutingReducer=(state=initialState,action)=>{
	switch(action.type){
		case ROUTING_PAGE1:
			return true;
		case ROUTING_PAGE2:
			return false;
		default:
			return state;

	}
}

export default pageRoutingReducer;