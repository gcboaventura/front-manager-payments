import { all, takeLatest } from 'redux-saga/effects'
import { DeleteAccountActionKeys } from './account/delete/action'
import { fetchDeleteAccount } from './account/delete/sagas'
import { GetAccountActionKeys } from './account/get/action'
import { fetchGetAccount } from './account/get/sagas'
import { AddCreditCardActionKeys } from './credit-card/add/action'
import { fetchAddCreditCard } from './credit-card/add/sagas'
import { DeleteCreditCardActionKeys } from './credit-card/delete/action'
import { fetchDeleteCreditCard } from './credit-card/delete/sagas'
import { UpdateCreditCardActionKeys } from './credit-card/update/action'
import { fetchUpdateCreditCard } from './credit-card/update/sagas'
import { AddPaypalActionKeys } from './paypal/add/action'
import { fetchAddPaypal } from './paypal/add/sagas'
import { DeletePaypalActionKeys } from './paypal/delete/action'
import { fetchDeletePaypal } from './paypal/delete/sagas'
import { UpdatePaypalActionKeys } from './paypal/update/action'
import { fetchUpdatePaypal } from './paypal/update/sagas'
import { GetAllPlansActionKeys } from './plans/get/action'
import { fetchGetAllPlans } from './plans/get/sagas'

export function* rootSaga() {
	yield all([
		takeLatest(AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_START, fetchAddCreditCard),
		takeLatest(DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_START, fetchDeleteCreditCard),
		takeLatest(UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_START, fetchUpdateCreditCard),
		takeLatest(AddPaypalActionKeys.FETCH_ADD_PAYPAL_START, fetchAddPaypal),
		takeLatest(DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_START, fetchDeletePaypal),
		takeLatest(UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_START, fetchUpdatePaypal),
		takeLatest(GetAccountActionKeys.FETCH_GET_ACCOUNT_START, fetchGetAccount),
		takeLatest(DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_START, fetchDeleteAccount),
		takeLatest(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START, fetchGetAllPlans)
	])
}
