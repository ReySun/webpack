import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { BrowserRouter as Router,  } from 'react-router-dom';
import { App } from './App';

let Router
if(process.env.SERVER){ // hashRouter is no support for server(cause of can't accept front end hash router, not send hash router at all), this for server render
    Router = require('react-router-dom').BrowserRouter
}else{
    Router = require('react-router-dom').HashRouter
}

ReactDOM.render(
    <Router hashType='hashbang'>
        <App />
    </Router>,
    document.getElementById('root'))

// 样式测试
// import './assets/css/css.css';
// import './assets/sass/sass.scss';
// import './assets/less/less.less';
// if (__DEV__) {
//     console.log(__DEV__,'----');
// }
// if(module.hot){
//     console.log('module.hot');
// }