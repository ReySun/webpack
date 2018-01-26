import { initPreState } from '../../constants/initPreState';
import { Action, Todo, State } from '../../constants/interface';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../../constants/ActionType';
import { store } from '../store/index';

/* action creator */
export function addTodo(text: string): Action {
    const todos = store.getState() as State;
    let todosLen = todos.todos.length || 0;
    return {
        id: todosLen++,
        type: ADD_TODO,
        text
    }
};
export function removeTodo(id: number): Action {
    return {
        type: REMOVE_TODO,
        id
    };
};
export function toggleTodo(id: number): Action {
    return {
        type: TOGGLE_TODO,
        id
    }
};
export function setVisibilityFilter(filter: string): Action {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
};