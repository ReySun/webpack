import * as React from 'react';
import { Todo } from '../constants/interface';
import { Haha, Hello } from './tree-shaking-test';
export default class Header extends React.Component<any>{
    addTodo: Function;
    constructor(props){
        super(props);
        this.addTodo=props.addTodo;
    }
    onKeyUp(e){
        let keyCode = e.charCode || e.keyCode;
        let val = e.target.value;
        if(keyCode === 13 && val.trim() !== ''){
            this.addTodo(val);
            e.target.value = '';
        }
    }
    render(){
        return (<>
            <h1>todos</h1>
            <input onKeyUp={this.onKeyUp.bind(this)} type="text" className='new-todo' placeholder='What needs to be done?' />
        </>)
    }
}