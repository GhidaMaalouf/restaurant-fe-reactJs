import { PAGE_NUMBER } from '../constantTypes';

export const pageAction = (value) => {
    return({
        type: PAGE_NUMBER,
        value: value
    })
}