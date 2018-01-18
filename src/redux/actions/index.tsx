
export interface Action{
    type: string;
    text?: string;
    index?: number
    filter?: string;
}
export interface VisibilityFilter{
    filter: string
}
export interface State{
    filter: string;
    todos: [Todo];
}
export interface Todo{
    name: string;
    completed: boolean;
}

/* action type */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/* action creator */
export function addTodo(text: string): Action {
    return { type: ADD_TODO, text }
}
  
export function toggleTodo(index: number): Action {
    return { type: TOGGLE_TODO, index }
}
  
export function setVisibilityFilter(filter: string): Action {
    return { type: SET_VISIBILITY_FILTER, filter }
}