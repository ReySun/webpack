import { combineReducers } from 'redux';
import { Todo, Action } from '../../constants/interface';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../constants/ActionType';

function todos(todos: [Todo] = [] as [Todo], action: Action){
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return todos.map((todo, index) => {
                if (index === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        case REMOVE_TODO:
            return todos.filter((todo) =>
                todo.id !== action.id
            )
        default:
            return todos
    }
};

const todoApp = combineReducers({
    todos
});

export default todoApp;