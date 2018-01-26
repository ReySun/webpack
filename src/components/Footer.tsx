import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Todo } from '../constants/interface';

export default class Footer extends React.Component<any>{
    todos: [Todo];
    todosLen: number = 0;
    constructor(props){
        super(props);
    }
    render(){
        this.todosLen = this.props.todos.length;
        return (this.todosLen === 0 ? null :
            <div className='footer'>
                <span className='todo-count'>
                    <strong>{this.todosLen}</strong>
                    <span> {this.todosLen === 1 ? 'item' : 'items'} </span>
                    <span>left</span>
                </span>
                <ul className='filters'>
                    <li><NavLink activeClassName="selected" to="/all">All</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/active">Active</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/completed">Completed</NavLink></li>
                </ul>
            </div>
        )
    }
};