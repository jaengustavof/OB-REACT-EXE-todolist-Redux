import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../pure/TodoList';

//Actions
import { toggleTodo } from '../../store/actions/actions';


const filterTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos

        case 'SHOW_ATIVE':
            return todos.filter((todo)=> !todo.completed);
        
        case 'SHOW_COMPLETED':
            return todos.filter((todo)=> todo.completed);

        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todoState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onTodoClick: (id) =>{
            dispatch(toggleTodo(id))
        }
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer