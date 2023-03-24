// Initial TodosState

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";


// Initial TODOS is empty
let initialState = [];

export const todosReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            
            return [ //returns everything that state has and adds a new object with the id, text and status
                ...state, {
                    id: action.payload.id, 
                    text: action.payload.text, 
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
    
        default:
            return state;
    }
}