import { combineReducers } from 'redux';
import { Todo, Action } from '../../constants/interface';
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../constants/ActionType';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action: Action): string {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter as string
        default:
            return state
    }
};

function todos(state = [], action: Action){
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo: Todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        case REMOVE_TODO:
            return state.filter((todo: Todo) =>
                todo.id !== action.index
            )
        default:
            return state
    }
};

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;