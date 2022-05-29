import {
    ASYNC_CREATE_ALL, ASYNC_FETCH_ALL, ASYNC_UPDATE_ALL,
    CREATE_ALL, CREATE_PARENTS, FETCH_ALL, UPDATE_ALL

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



export  const updateAll = (all) => {
    return {
        type: UPDATE_ALL,
        payload: all
    }
}


export  const asyncFetchAll = payload => {
    return {
        type: ASYNC_FETCH_ALL,
        payload
    }
}

export  const asyncUpdateAll = payload => {
    return {
        type: ASYNC_UPDATE_ALL,
        payload
    }
}