import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import Todos from './components/Todos_app';

let Devtools;
if(__DEV__){
    Devtools = require('./redux/redux-devtools/index').default
}else{
    Devtools = () => (null)
};
export const App = () => {
    return (<Provider store={store}>
        <>
            <Todos />
            <Devtools />
        </>
    </Provider>)
};
