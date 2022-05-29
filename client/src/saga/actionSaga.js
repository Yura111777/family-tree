import {put, takeEvery} from 'redux-saga/effects'
import {createAllPK, fetchAll, updateAll} from "../reducers/actions";
import {ASYNC_CREATE_ALL, ASYNC_FETCH_ALL, ASYNC_UPDATE_ALL} from "../reducers/types";
import axios from "axios";
import {call} from "@redux-saga/core/effects";

const delay = (ms) => new Promise( res => setTimeout(res, ms))

const fetchAPiParents = ()=> axios('http://127.0.0.1:8080/api/v1/parents',{
    method: 'GET'
})

const fetchAPiKids = ()=> axios ('http://127.0.0.1:8080/api/v1/kids',{
    method: 'GET'
})
let dataId, data, type;
export const saga = (...params) => {
    [dataId, data, type] = [...params]
}
const updateAPi = ()=> axios (`http://127.0.0.1:8080/api/v1/${type}/${dataId}`,{
    method: 'PATCH',
    data
})

function* createAll() {
    yield delay(1000)
    yield put(createAllPK())
}

function* updateParentsKids() {
  const data2 =  yield call(updateAPi)
    yield put(updateAll(data2.data.data))
}

function* fetchAllData() {
    const data = yield call(fetchAPiParents)
    const data1 = yield call(fetchAPiKids)

    yield put(fetchAll({parents: data.data.data, kids: data1.data.data}))
}


export function* allWatcher() {
    yield takeEvery(ASYNC_CREATE_ALL, createAll)
    yield takeEvery(ASYNC_FETCH_ALL, fetchAllData)
    yield takeEvery(ASYNC_UPDATE_ALL, updateParentsKids)
}