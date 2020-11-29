import { GET_VISITED_RESTAURANTS, REQUEST_VISITED_RESTAURANTS } from '../constantTypes';

export const getVisitLog = (data) => {
    return({
        type: GET_VISITED_RESTAURANTS,
        data:data
    })
}

export const requestVisitLog = () => {
    return({
        type: REQUEST_VISITED_RESTAURANTS
    })
}

