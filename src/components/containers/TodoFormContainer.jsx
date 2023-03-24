import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions';
import TodoForm from '../pure/TodoForm';


const mapStateToProps = (state) => ({

    //not necessary

})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) =>{ //submit receives te text from TodoForm on (newText.current.value)
            dispatch(addTodo(text))
        }
    }
};

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer