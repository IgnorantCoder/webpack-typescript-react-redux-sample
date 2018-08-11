import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../modules';
import AddTodo from '../components/AddTodo';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onSubmit: (text: string) => {
            dispatch(actionCreator.todos.addTodo({ text }));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTodo);