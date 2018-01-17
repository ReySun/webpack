console.log(2);
document.write('<h1>Hello World</h1>');

if (__DEV__) {
  document.write(new Date());
}
// 样式测试
import './assets/css/css.css';
import './assets/sass/sass.scss';
import './assets/less/less.less';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
console.log(ReactDOM);
function App(){
  return (
    <Fragment>
      Hello, world!
    </Fragment>
  )
}
ReactDOM.render(<App />,document.getElementById('root'))