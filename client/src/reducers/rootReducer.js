const initialState = {
    parents: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PARENTS':
            return {
                ...state,
                parents: action.payload
            }
        default:
            return state;
    }

}

export default rootReducer;