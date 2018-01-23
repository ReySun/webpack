import { createStore, compose, applyMiddleware } from 'redux'
import todoApp from '../reducers/index'
import { createLogger } from 'redux-logger'
import DevTools from '../redux-devtools/index'

export let store = createStore(
    todoApp,
    {},
    compose(
        applyMiddleware(createLogger()),
        DevTools.instrument()
    )
);