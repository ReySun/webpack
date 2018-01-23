// 样式测试
// import './assets/css/css.css';
// import './assets/sass/sass.scss';
// import './assets/less/less.less';
if (__DEV__) {
    console.log(__DEV__);
}
if(module.hot){
    console.log('module.hot');
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,  } from 'react-router-dom'

import { store } from './redux/store/index'
import Todos from './components/Todos_app'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Todos />
        </Router>
    </Provider>,
    document.getElementById('root'))