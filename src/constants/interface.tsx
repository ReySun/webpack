export interface Action{
    type: string;
    id?: number;
    text?: string;
    filter?: string;
};
export interface Todo{
    text: string;
    completed: boolean;
    id: number;
};
type visibilityFilter = string
export interface State{
    visibilityFilter: visibilityFilter;
    todos: [Todo]|[any];
};