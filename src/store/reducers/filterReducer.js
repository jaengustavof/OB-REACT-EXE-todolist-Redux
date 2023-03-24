// Initial TodosState
import { SET_VISIBILITY_FILTER } from "../actions/actions";

//Initial values for filter state
let initialState = 'SHOW_ALL';

export const filterReducer = (state=initialState, action) => {

    switch (action) {
        case SET_VISIBILITY_FILTER:
            
            return action.payload.filterReducer

        default:
            return state;
    }
}