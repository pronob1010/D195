import rootReducer from './reducers/reducerBase.js';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;