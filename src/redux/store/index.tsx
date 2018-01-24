import { createStore, compose, applyMiddleware } from 'redux'
import todoApp from '../reducers/index'
import { createLogger } from 'redux-logger'

let composed = null
if(__DEV__){
    const DevTools = require('../redux-devtools/index');
    composed = compose(
        applyMiddleware(createLogger()),
        DevTools.default.instrument()
    )
}else{
    composed = compose()
}

export let store = createStore(
    todoApp,
    {},
    composed
);