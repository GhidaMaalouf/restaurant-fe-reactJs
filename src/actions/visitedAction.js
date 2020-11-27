import { GET_VISITED_RESTAURANTS, REQUEST_VISITED_RESTAURANTS } from '../constantTypes';

export const getVisitLog = () => {
    return({
        type: GET_VISITED_RESTAURANTS
    })
}

export const requestVisitLog = () => {
    return({
        type: REQUEST_VISITED_RESTAURANTS
    })
}

