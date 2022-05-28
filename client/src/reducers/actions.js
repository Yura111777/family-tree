import {
    ASYNC_CREATE_ALL, ASYNC_FETCH_ALL,
    CREATE_ALL, CREATE_PARENTS, EDIT_KIDS, EDIT_PARENTS, FETCH_ALL

} from "./types";


export const createAllPK = (all) => {
    return {
        type: CREATE_ALL,
        payload: all
    }
}
export const asyncCreateAllPK = ()  =>  ({type: ASYNC_CREATE_ALL})

export  const createParents = (parents) => {
    return {
        type: CREATE_PARENTS,
        payload: parents
    }
}



export  const fetchAll = all => {
    return {
        type: FETCH_ALL,
        payload: all
    }
}



export  const editParents = (parents) => {
    return {
        type: EDIT_PARENTS,
        payload: parents
    }
}

export  const editKids = (kid) => {
    return {
        type: EDIT_KIDS,
        payload: kid
    }
}

export  const asyncFetchAll = payload => {
    return {
        type: ASYNC_FETCH_ALL,
        payload
    }
}