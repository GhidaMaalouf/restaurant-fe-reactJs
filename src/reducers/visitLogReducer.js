import { GET_VISITED_RESTAURANTS } from '../constantTypes';

const initialState = [];

const visitLogReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_VISITED_RESTAURANTS:
            return action.data;
        default:
            return state;
    }
}

export default visitLogReducer;