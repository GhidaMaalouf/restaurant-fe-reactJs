import {SHOW_ALL_RESTAURANTS,SHOW_SEARCHED_RESTAURANTS} from '../constantTypes';

const initialState = true;

const showRestReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_ALL_RESTAURANTS:
            return true;
        case SHOW_SEARCHED_RESTAURANTS:
            return false;
        default:
            return state;
    }
}

export default showRestReducer;