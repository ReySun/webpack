import * as React from 'react';
import ListLink from './ListLink';
import { Todo } from '../constants/interface';

class TodoLists extends React.Component<any>{
    todos: [Todo];
    toggleTodo: Function;
    removeTodo: Function;
    match: any;
    constructor(props){
        super(props);
        this.toggleTodo=props.actions.toggleTodo;
        this.removeTodo=props.actions.removeTodo;
    }
    render(){
        this.todos=this.props.todos;
        this.match = this.props.match;
        console.log(this.match.params);
        console.log(this.todos.length);
        return (this.todos.length === 0 ? null :
            <div className='main'>
                <input className='toggle-all' type='checkbox'/>
                <ul className='todo-list'>
                    {this.todos.map((todo)=>{
                        return <ListLink todo={todo} key={todo.id} ToggleTodo={this.toggleTodo} RemoveTodo={this.removeTodo} />
                    })}
                </ul>
            </div>
        )
    }
};
export default TodoLists;