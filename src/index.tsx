console.log(2);
document.write('<h1>Hello World</h1>');

// 样式测试
import './assets/css/css.css';
import './assets/sass/sass.scss';
import './assets/less/less.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(){
  return (
    <>
        Hello, world!
    </>
  )
}
ReactDOM.render(<App />,document.getElementById('root'))