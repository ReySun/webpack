import { State } from "./interface";

export const initPreState: State={
    visibilityFilter:"SHOW_ALL",
    todos: [
        {
            id: 0,
            text: 'Use React',
            completed: true
            
        },
        {
            id: 1,
            text: 'Use Redux',
            completed: false
        }
    ]
} as State;