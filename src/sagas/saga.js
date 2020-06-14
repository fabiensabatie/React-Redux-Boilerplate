import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_DATA, fetchData } from '../actions/actions';

function* asyncFetch(actions) {
	try {
		/* Do smth */
		yield put(fetchData([]));
	} catch (error) {
		console.log(error);
	}
}

export default function* saga() {
	yield takeLatest(FETCH_DATA, asyncFetch);
}
