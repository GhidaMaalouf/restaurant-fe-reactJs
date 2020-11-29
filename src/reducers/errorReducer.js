import {DISPLAY_ERROR, CLEAR_ERROR} from '../constantTypes';

const initialState = {
    info : {
        message : '',
        open : false
    }
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_ERROR:
            return {
                info: {
                    message : action.message,
                    open : true
                }
            };
        case CLEAR_ERROR:
            return {
                info : {
                    message : "",
                    open: false
                }
            };
        default:
            return state;
    }
}

export default errorReducer;