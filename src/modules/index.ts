import { combineReducers } from 'redux';
import * as Todos from './todos';
import * as VisibilityFilter from './visibilityFilter';

export type RootState = {
    todos: Todos.State;
    visibilityFilter: VisibilityFilter.State;
};

export const rootReducer = combineReducers({
    todos: Todos.reducer,
    visibilityFilter: VisibilityFilter.reducer,
});

export const actionCreator = {
    todos: Todos.actionCreator,
    visibilityFilter: VisibilityFilter.actionCreator,
};