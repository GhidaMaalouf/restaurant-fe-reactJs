import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import { syncAll,syncVisited,syncCheck,syncSearch } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(syncAll);
sagaMiddleware.run(syncVisited);
sagaMiddleware.run(syncCheck);
sagaMiddleware.run(syncSearch);

export default store;
