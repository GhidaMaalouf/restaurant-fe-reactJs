import { takeLatest, call} from 'redux-saga/effects';
import { REQUEST_RESTAURANTS } from './constantTypes';
import { getAllRestaurants } from './apiService';

function* restaurantsAsync(action){
    try {
        const allResto = yield call (getAllRestaurants);
    }
    catch (error){
        console.log("error :"+error)
        
    }
}
export function* syncAll(){
    yield takeLatest(REQUEST_RESTAURANTS, restaurantsAsync);
}