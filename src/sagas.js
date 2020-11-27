import { takeLatest, call, put} from 'redux-saga/effects';
import { REQUEST_RESTAURANTS,REQUEST_VISITED_RESTAURANTS } from './constantTypes';
import { getAll , getAllVisits } from './apiService';
import { loadAction } from './actions/loadAction';
import { getAllRestaurants } from './actions/callRestaurantsAction';
import { getVisitLog } from './actions/visitedAction';

function* restaurantsAsync(action){
    try {
    	yield put(loadAction(true));
        const allRests = yield call (getAll);
        yield put(getAllRestaurants(allRests));
        yield put(loadAction(false));
    }
    catch (error){
        console.log("error :"+error);
        yield put(loadAction(false));
        
    }
}
export function* syncAll(){
    yield takeLatest(REQUEST_RESTAURANTS, restaurantsAsync);
}




function* allVisitedAsync(){
    try {
        yield put(loadAction(true));
        const visit = yield call (getAllVisits);
        yield put(getVisitLog(visit));
        yield put(loadAction(false));
    }
    catch (e){
        console.log("error :"+e);
        yield put(loadAction(false));
        
  
    }
}

export function* syncVisited(){
    yield takeLatest(REQUEST_VISITED_RESTAURANTS, allVisitedAsync);
}