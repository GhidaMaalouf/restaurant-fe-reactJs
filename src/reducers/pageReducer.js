import {PAGE_NUMBER} from '../constantTypes';

const initialState=1;

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_NUMBER:
            return action.value;
        default:
            return state;
    }
}

export default pageReducer;