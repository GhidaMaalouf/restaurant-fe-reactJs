import {DISPLAY_ERROR, CLEAR_ERROR} from '../constantTypes';

export const errorAction = (message) => {
    return({
        type: DISPLAY_ERROR,
        message: message
    })
}

export const clearErrorAction = () => {
    return({
        type: CLEAR_ERROR
    })
}