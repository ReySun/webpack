import * as React from 'react';
import ListLink from './ListLink';
import { Todo } from '../constants/interface';

class TodoLists extends React.Component<any>{
    todos: [Todo];
    toggleTodo: Function;
    removeTodo: Function;
    constructor(props){
        super(props);
        this.toggleTodo=props.actions.toggleTodo;
        this.removeTodo=props.actions.removeTodo;
    }
    render(){
        switch (this.props.match.params.id) {
            case 'active':
                this.todos=this.props.todos.filter((todo)=>(
                    todo.completed === false
                ));
                break;
            case 'completed':
                this.todos=this.props.todos.filter((todo)=>(
                    todo.completed === true
                ));
                break;
            case 'all':
            default:
                this.todos=this.props.todos;
                break;
        }
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