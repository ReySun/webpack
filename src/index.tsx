// 样式测试
import './assets/css/css.css';
import './assets/sass/sass.scss';
import './assets/less/less.less';
if (__DEV__) {
    console.log(__DEV__);
}
if(module.hot){
    console.log('module.hot');
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { store } from './redux/store/index'
import { Hello } from './components/hello'

function App() {
    return (
        <>
            Hello, world!
            <Hello />
        </>
    )
}
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))