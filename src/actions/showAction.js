import {SHOW_ALL_RESTAURANTS,SHOW_SEARCHED_RESTAURANTS} from '../constantTypes';


export const showAllRestAction = () => {
    return({
        type: SHOW_ALL_RESTAURANTS,
    })
}

export const showSearchedRestAction = () => {
    return({
        type: SHOW_SEARCHED_RESTAURANTS,
    })
}