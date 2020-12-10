import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../types';
import { fetchDataSuccess } from '../actions';

function* asyncFetchRequest(action) {
    try {
        const url = `https://reqres.in/api/users/${action.payload}`;
        const response = yield call(() => axios.get(url));
        yield put(fetchDataSuccess(response.data.data.first_name));
        console.log(response.data.data.first_name);
    } catch (error) {
        console.log(error)
    }
}

export function* watchFetchDataSaga() {
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}