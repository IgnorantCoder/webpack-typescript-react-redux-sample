import { Action } from 'redux';

export type AddTodoPayload = {
    text: string;
};

export interface AddTodoAction extends Action {
    type: 'ADD_TODO';
    payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
    return {
        payload,
        type: 'ADD_TODO',
    };
};