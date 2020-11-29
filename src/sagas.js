import { takeLatest, call, put} from 'redux-saga/effects';
import { REQUEST_RESTAURANTS,REQUEST_VISITED_RESTAURANTS,CHECKED,REQUEST_SEARCH } from './constantTypes';
import { getAll , getAllVisits, postVisited} from './apiService';
import { loadAction } from './actions/loadAction';
import { getAllRestaurants } from './actions/callRestaurantsAction';
import { getVisitLog } from './actions/visitedAction';
import { postVisitedSuccess } from './actions/postVisitedAction';
import { getSearch } from './actions/searchAction';

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

function* addVisitedAsync(action){
    try {

        yield call (postVisited,action.restaurant);
        yield put(postVisitedSuccess);

    }
    catch (e){
        console.log("Caught the error :"+e)
        //yield put(errorAction("Error adding visited restaurants !"))
    }
}

export function* syncCheck(){
    yield takeLatest(CHECKED, addVisitedAsync);
}


function* searchAsync(action){
    try {
        yield put(loadAction(true));
        const allRests = yield call (getAll);
        console.log(allRests);
        let search=0;
        if (action.data.name === ""){
         search = getDataSearchByType(allRests,action.data.type);
         console.log(search);
         yield put(getSearch(search));
        
       }
       else if(action.data.type === "" || action.data.type === "all"){
            search = getDataSearchByName(allRests,action.data.name);
            console.log(search);
             yield put(getSearch(search));
             
        }else{
            search=getDataSearchByNameAndByType(allRests,action.data.name,action.data.type);
            yield put(getSearch(search));
           

        }
        yield put(loadAction(false));
    }
    catch (e){
          console.log("Caught the error :"+e)
          
   }
}


 const getDataSearchByType=(allRest,type)=>{
     let dataByType=[];
     let obj={};
     
     for(let rest of allRest){
         if((rest.restaurantType).toLowerCase()===type){ 
             obj=rest;
             dataByType.push(obj);  
         }
     }
     
     return(dataByType);
 }  

  const getDataSearchByName=(allRest,name)=>{
     let dataByName=[];
     let obj={};
     
     for(let rest of allRest){
         if((rest.restaurantName)===name){ 
             obj=rest;
             dataByName.push(obj);  
         }
     }
     console.log(dataByName);
     return(dataByName);
 }    

 const getDataSearchByNameAndByType=(allRest,name,type)=>{
     let dataByNameAndType=[];
     let obj={};
     
     for(let rest of allRest){
         if((rest.restaurantName)===name && (rest.restaurantType).toLowerCase()===type){ 
             obj=rest;
             dataByNameAndType.push(obj);  
         }
     }
     return(dataByNameAndType);
 }  
      

  export function* syncSearch(){
    yield takeLatest(REQUEST_SEARCH, searchAsync);
}

