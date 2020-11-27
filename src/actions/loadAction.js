import { LOAD } from '../constantTypes';

export const loadAction = (value) => {
    return({
        type: LOAD,
        value:value
    })
}
