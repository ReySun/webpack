import * as React from 'react';
import { Todo } from '../constants/interface';

export default class ListLink extends React.Component<any>{
    todo: Todo;
    ToggleTodo: Function;
    RemoveTodo: Function;
    constructor(props){
        super(props);
        this.ToggleTodo=props.ToggleTodo;
        this.RemoveTodo=props.RemoveTodo;
    }
    onToggleTodo(i){
        this.ToggleTodo(i);
    }
    onRemoveTodo(i){
        this.RemoveTodo(i);
    }
    render(){
        this.todo=this.props.todo;
        return (
            <li className={this.todo.completed === true ? 'completed':''}>
                <div className='view'>
                    <input className='toggle' onChange={this.onToggleTodo.bind(this, this.todo.id)} checked={this.todo.completed} type="checkbox"/>
                    <label onClick={this.onToggleTodo.bind(this, this.todo.id)} >{this.todo.text}</label>
                </div>
                <button onClick={this.onRemoveTodo.bind(this, this.todo.id)} className='destroy'></button>
            </li>
        )
    }
}