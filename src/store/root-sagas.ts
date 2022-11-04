import { all, takeLatest } from 'redux-saga/effects'
import { DeleteAccountActionKeys } from './account/delete/action'
import { fetchDeleteAccount } from './account/delete/sagas'
import { GetAccountActionKeys } from './account/get/action'
import { fetchGetAccount } from './account/get/sagas'
import { GetAllPlansActionKeys } from './plans/get/action'
import { fetchGetAllPlans } from './plans/get/sagas'
import { UpdatePlanActionKeys } from './plans/update/action'
import { fetchUpdatePlan } from './plans/update/sagas'

export function* rootSaga() {
	yield all([
		takeLatest(GetAccountActionKeys.FETCH_GET_ACCOUNT_START, fetchGetAccount),
		takeLatest(DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_START, fetchDeleteAccount),
		takeLatest(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START, fetchGetAllPlans),
		takeLatest(UpdatePlanActionKeys.FETCH_UPDATE_PLAN_START, fetchUpdatePlan)
	])
}
