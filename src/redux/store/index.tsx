import { createStore, compose, applyMiddleware } from 'redux';
import todoApp from '../reducers/index';
import { initPreState } from '../../constants/initPreState';

let composed = null;
if(process.env.NODE_ENV === 'production'){
    composed = compose()
}else{
    const DevTools = require('../redux-devtools/index').default;
    const createLogger = require('../redux-devtools/createLogger').default
    composed = compose(
        applyMiddleware(createLogger()),
        DevTools.instrument(),// here choose redux-devtools, only one devtools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // chrome redux extention
    )
};
export let store = createStore(
    todoApp,
    initPreState,
    composed
);