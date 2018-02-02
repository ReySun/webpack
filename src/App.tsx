import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import Todos from './components/Todos_app';

let Devtools;
if(process.env.NODE_ENV === 'production'){
    Devtools = () => (null)
}else{
    Devtools = require('./redux/redux-devtools/index').default
};
export const App = () => {
    return (<Provider store={store}>
        <>
            <Todos />
            <Devtools />
        </>
    </Provider>)
};
