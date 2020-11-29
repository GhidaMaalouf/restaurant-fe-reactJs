import { POSTED } from '../constantTypes';


const initialState=false;

const postVisitedReducer = (state=initialState, action) => {
    switch (action.type) {
        case POSTED:
            return !state;
        default:
            return state;
    }
}

export default postVisitedReducer;