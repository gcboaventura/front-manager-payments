import { PaypalAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchDeletePaypalAction, DeletePaypalActions } from './action'

export function* fetchDeletePaypal(action: fetchDeletePaypalAction) {
	const paypalAPI = new PaypalAPI()
	try {
		const { data } = yield call(paypalAPI.delete, action.payload)
		yield put(DeletePaypalActions.fetchDeletePaypalSuccess(data))
	} catch (error: unknown) {
		yield put(DeletePaypalActions.fetchDeletePaypalFalied(error as Error))
	}
}
