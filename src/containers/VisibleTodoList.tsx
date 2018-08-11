import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../modules';
import TodoList from '../components/TodoList';

const mapStateToProps = (state: RootState) => {
    const filter = () => {
        switch (state.visibilityFilter.visibility.type) {
        case 'SHOW_ALL':
            return state.todos.todos;
        case 'SHOW_COMPLETED':
            return state.todos.todos.filter(e => e.completed);
        case 'SHOW_ACTIVE':
            return state.todos.todos.filter(e => !e.completed);
        default:
            throw new Error(`Unknown filter.`);
        }
    };
    return {
        todos: filter(),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        toggleTodo: (id: number) => {
            dispatch(actionCreator.todos.toggleTodo({ id }));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);