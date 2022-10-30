import { PaypalAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchUpdatePaypalAction, UpdatePaypalActions } from './action'

export function* fetchUpdatePaypal(action: fetchUpdatePaypalAction) {
	const PaypalApi = new PaypalAPI()
	try {
		const { data } = yield call(PaypalApi.update, action.payload)
		yield put(UpdatePaypalActions.fetchUpdatePaypalSuccess(data))
	} catch (error: unknown) {
		yield put(UpdatePaypalActions.fetchUpdatePaypalFalied(error as Error))
	}
}
