import { createStore, compose, applyMiddleware } from 'redux'
import todoApp from '../reducers/index'
import { createLogger } from 'redux-logger'
import DevTools from '../redux-devtools/index'
// let composed = null
// if(__DEV__){
//     const DevTools = require('../redux-devtools/index');
//     composed = compose(
//         applyMiddleware(createLogger()),
//         DevTools.default.instrument()
//     )
// }else{
//     composed = compose()
// }
// console.log(DevTools);
export let store = createStore(
    todoApp,
    {},
    compose(
        applyMiddleware(createLogger()),
        // DevTools.instrument()
    )
);