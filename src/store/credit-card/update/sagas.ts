import { CreditCardAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchUpdateCreditCardAction, UpdateCreditCardActions } from './action'

export function* fetchUpdateCreditCard(action: fetchUpdateCreditCardAction) {
	const CreditCardApi = new CreditCardAPI()
	try {
		const { data } = yield call(CreditCardApi.update, action.payload)
		yield put(UpdateCreditCardActions.fetchUpdateCreditCardSuccess(data))
	} catch (error: unknown) {
		yield put(UpdateCreditCardActions.fetchUpdateCreditCardFalied(error as Error))
	}
}
