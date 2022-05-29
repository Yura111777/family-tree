import {CREATE_ALL, CREATE_PARENTS, FETCH_ALL, UPDATE_ALL} from "./types";

const initialState = {
    parents: [],
    kids: []
}

const rootReducer = (state = initialState, action) => {

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
                parents: action.payload.parents.parents,
                kids: action.payload.kids.kids,
            }
        case CREATE_PARENTS:
            return {
                ...state,
                parents: action.payload.parents,
            }
        case UPDATE_ALL:
            return {
                ...state,
                parents: state.parents.map(el => el._id === action.payload.parents?._id ?  action.payload.parents : el),
                kids: state.kids.map(el => el._id === action.payload.kids?._id ?  action.payload.kids : el),
            }
        default:
            return state;
    }

}

export default rootReducer;