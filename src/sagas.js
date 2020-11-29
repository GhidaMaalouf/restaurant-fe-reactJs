import { takeLatest, call, put} from 'redux-saga/effects';
import { REQUEST_RESTAURANTS,REQUEST_VISITED_RESTAURANTS,CHECKED,REQUEST_SEARCH } from './constantTypes';
import { getAll ,postVisited,getAllVisits} from './apiService';
import { loadAction } from './actions/loadAction';
import { getAllRestaurants } from './actions/callRestaurantsAction';
import { getVisitLog } from './actions/visitedAction';
import { postVisitedSuccess } from './actions/postVisitedAction';
import { getSearch } from './actions/searchAction';
import { errorAction } from './actions/errorAction';

function* searchAsync(action){
    try {
        yield put(loadAction(true));
        const allRests = yield call (getAll,action.data);
        let search=0;
        if (action.data.name === ""){
         search = getDataSearchByType(allRests,action.data.type);
         yield put(getSearch(search));
        
       }
       else if(action.data.type === "" || action.data.type === "all"){
            search = getDataSearchByName(allRests,action.data.name);
             yield put(getSearch(search));
             
        }else{
            search=getDataSearchByNameAndByType(allRests,action.data.name,action.data.type);
            yield put(getSearch(search));
        }
        yield put(loadAction(false));
    }
    catch (e){
          console.log("Caught the error :"+e);
          yield put(loadAction(false));
          yield put(errorAction("Error! Can not receive searched restaurants !"))
    }
          
   
}

export function* syncSearch(){
    yield takeLatest(REQUEST_SEARCH, searchAsync);
 }



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
        yield put(errorAction("Error! Can not get Restaurants ! "));
    }
}
export function* syncAll(){
    yield takeLatest(REQUEST_RESTAURANTS, restaurantsAsync);
}

function* addVisitedAsync(action){
    try { 
        yield call (postVisited,action.restaurant);
        yield put(postVisitedSuccess);

    }
    catch (e){
        console.log("Caught the error :"+e);
        //yield put(errorAction("Error! Can not add visited Restaurant! "));
    }
}

export function* syncCheck(){
    yield takeLatest(CHECKED, addVisitedAsync);
}



function* allVisitedAsync(){
    try {
        yield put(loadAction(true));
        const allRests = yield call (getAll);
        const visit= yield call(getAllVisits);
        console.log("visitSync");
        console.log(visit);
        let arr=[];
        for(let rest of allRests){
            let obj={};
            for (let v of rest.visitLogList){
                obj=v;
                obj["name"]=rest.restaurantName;
                let str=String(obj.date);
                let replace=new Date(Date.parse(str));
                let dateTimezone=replace.toUTCString();
                let date=dateTimezone.slice(0,dateTimezone.length-4);
                obj["dateFormat"]=date;
                arr.push(obj);
            }
         }
        console.log("arrSync");
        console.log(arr);        
        yield put(getVisitLog(arr));
        yield put(loadAction(false));
        
    }
    catch (e){
        console.log("error :"+e);
        yield put(loadAction(false));
        yield put(errorAction("Error! Can not get visited Restaurants ! "));
  
    }
}

export function* syncVisited(){
    yield takeLatest(REQUEST_VISITED_RESTAURANTS, allVisitedAsync);
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
     let lower=name.toLowerCase();
     for(let rest of allRest){
         if((rest.restaurantName).toLowerCase()===lower){ 
             obj=rest;
             dataByName.push(obj);  
         }
     }
     return(dataByName);
 }    

 const getDataSearchByNameAndByType=(allRest,name,type)=>{
     let dataByNameAndType=[];
     let obj={};
     let lower=name.toLowerCase();
     for(let rest of allRest){
         if((rest.restaurantName).toLowerCase()===lower && (rest.restaurantType).toLowerCase()===type){ 
             obj=rest;
             dataByNameAndType.push(obj);  
         }
     }
     return(dataByNameAndType);
 }  




