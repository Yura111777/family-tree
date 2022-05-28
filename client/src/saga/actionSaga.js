import {put, takeEvery} from 'redux-saga/effects'
import {createAllPK} from "../reducers/actions";
import {ASYNC_CREATE_ALL} from "../reducers/types";

const delay = (ms) => new Promise( res => setTimeout(res, ms))

function* createAll() {
    yield delay(1000)
    yield put(createAllPK())
}
function* createParents() {

}
function* editParents() {

}
function* editKids() {

}
function* fetchAll() {

}


export function* allWatcher() {
    yield takeEvery(ASYNC_CREATE_ALL, createAll)
}