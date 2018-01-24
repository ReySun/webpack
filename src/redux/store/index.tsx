import { createStore, compose, applyMiddleware } from 'redux';
import todoApp from '../reducers/index';

let composed = null;
// declare var window: { //chrome redux extention
//     __REDUX_DEVTOOLS_EXTENSION__: any
// };
if(__DEV__){
    const DevTools = require('../redux-devtools/index').default;
    const createLogger = require('./createLogger').default
    composed = compose(
        applyMiddleware(createLogger()),
        DevTools.instrument(),// here choose redux-devtools, only one devtools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // chrome redux extention
    )
}else{
    composed = compose()
}
const initPreState={ 
    todos: [
        {
            text: 'Use Redux',
            completed: false,
            id: 1
        }
    ]
}

export let store = createStore(
    todoApp,
    initPreState,
    composed
)