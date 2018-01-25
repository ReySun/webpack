import { initPreState } from '../../constants/initPreState';
import { Action } from '../../constants/interface';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../../constants/ActionType';

/* action creator */
let todosLen = initPreState.todos.length || 0;
export function addTodo(text: string): Action {
    return {
        id: todosLen++,
        type: ADD_TODO,
        text
    }
};
export function removeTodo(index: number) {
    return {
        type: REMOVE_TODO,
        index
    };
};
export function toggleTodo(index: number): Action {
    return {
        type: TOGGLE_TODO,
        index
    }
};
export function setVisibilityFilter(filter: string): Action {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
};