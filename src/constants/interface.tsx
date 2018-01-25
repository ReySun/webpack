export interface Action{
    type: string;
    id?: number;
    text?: string;
    index?: number
    filter?: string;
};
export interface VisibilityFilter{
    filter: string
};
export interface State{
    filter: string;
    todos: [Todo];
};
export interface Todo{
    text: string;
    completed: boolean;
    id: number;
};