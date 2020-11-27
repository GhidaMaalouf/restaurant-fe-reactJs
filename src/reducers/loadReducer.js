import { LOAD } from '../constantTypes';

const initialState=false;

const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return action.value;
        default:
            return state;
    }
}

export default loadReducer;