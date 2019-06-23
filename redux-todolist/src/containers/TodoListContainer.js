import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoListActions from '../store/modules/todos';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {

    handleChange = e => {
        const { TodoListActions } = this.props;
        TodoListActions.changeInput(e.target.value);

    };

    handleSubmit = e => {
        e.preventDefault();
        const { TodoListActions, input } = this.props;
        TodoListActions.create(input);
        TodoListActions.changeInput('');
    };

    handleCheck = id => {
        const { TodoListActions } = this.props;
        TodoListActions.check(id);
    };

    handleRemove = id => {
        const { TodoListActions } = this.props;
        TodoListActions.remove(id);
    };

    render() {
        const { input, todoItemList } = this.props;
        return (
            <TodoList
                input={input}
                todos={todoItemList}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onToggle={this.handleCheck}
                onRemove={this.handleRemove}
            />
        );
    }
}

const mapStateToProps = ({ todos }) => ({
    input: todos.get('input'),
    todoItemList: todos.get('todoItemList'),
});

const mapDispatchToProps = dispatch => ({
    TodoListActions: bindActionCreators(todoListActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);