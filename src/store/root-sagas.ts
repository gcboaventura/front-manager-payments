import { all, takeLatest } from 'redux-saga/effects'
import { AddCreditCardActionKeys } from './credit-card/add/action'
import { fetchAddCreditCard } from './credit-card/add/sagas'

export function* rootSaga() {
	yield all([takeLatest(AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_START, fetchAddCreditCard)])
}
