import {CHECKED, POSTED} from '../constantTypes';

export const addVisitedRest = (restaurant) => {
    return({
        type: CHECKED,
        restaurant : restaurant
    })
}

export const postVisitedSuccess = () => {
    return({
        type : POSTED
    })
}
