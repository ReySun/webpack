import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router,  } from 'react-router-dom';
import { App } from './App';

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