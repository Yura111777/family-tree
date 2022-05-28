import {CREATE_ALL, CREATE_PARENTS, EDIT_KIDS, EDIT_PARENTS, FETCH_ALL} from "./types";

const initialState = {
    parents: [],
    kids: []
}

const rootReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case CREATE_ALL:
            return {
                ...state,
                parents: action.payload.parents.parents ? state.parents.concat(action.payload.parents.parents) : [...state.parents],
                kids: action.payload.kids.kids ? state.kids.concat(action.payload.kids.kids) : [...state.kids],
            }
        case FETCH_ALL:
            return {
                ...state,
                parents: action.payload.parents,
                kids: action.payload.kids,
            }
        case CREATE_PARENTS:
            return {
                ...state,
                parents: action.payload.parents,
            }
        case EDIT_PARENTS:
            return {
                ...state,
                parents: action.payload.parents,
            }
        case EDIT_KIDS:
            return {
                ...state,
                kids: action.payload.parents,
            }
        default:
            return state;
    }

}

export default rootReducer;