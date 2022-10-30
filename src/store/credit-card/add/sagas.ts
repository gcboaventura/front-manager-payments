import { CreditCardAPI } from '@/data'
import { call, put } from 'redux-saga/effects'
import { fetchAddCreditCardAction, AddCreditCardActions } from './action'

export function* fetchAddCreditCard(action: fetchAddCreditCardAction) {
	const CreditCardApi = new CreditCardAPI()
	try {
		const { data } = yield call(CreditCardApi.add, action.payload)
		yield put(AddCreditCardActions.fetchAddCreditCardSuccess(data))
	} catch (error: unknown) {
		yield put(AddCreditCardActions.fetchAddCreditCardFalied(error as Error))
	}
}
