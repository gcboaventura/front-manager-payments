import { PaypalAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchAddPaypalAction, AddPaypalActions } from './action'

export function* fetchAddPaypal(action: fetchAddPaypalAction) {
	const PaypalApi = new PaypalAPI()
	try {
		const { data } = yield call(PaypalApi.add, action.payload)
		yield put(AddPaypalActions.fetchAddPaypalSuccess(data))
	} catch (error: unknown) {
		yield put(AddPaypalActions.fetchAddPaypalFalied(error as Error))
	}
}
