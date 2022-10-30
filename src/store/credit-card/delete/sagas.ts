import { CreditCardAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchDeleteCreditCardAction, DeleteCreditCardActions } from './action'

export function* fetchDeleteCreditCard(action: fetchDeleteCreditCardAction) {
	const CreditCardApi = new CreditCardAPI()
	try {
		const { data } = yield call(CreditCardApi.delete, action.payload)
		yield put(DeleteCreditCardActions.fetchDeleteCreditCardSuccess(data))
	} catch (error: unknown) {
		yield put(DeleteCreditCardActions.fetchDeleteCreditCardFalied(error as Error))
	}
}
