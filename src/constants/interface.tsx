export interface Action{
    type: string;
    id?: number;
    text?: string;
};
export interface Todo{
    text: string;
    completed: boolean;
    id: number;
};
export interface State{
    todos: [Todo]|[any];
};