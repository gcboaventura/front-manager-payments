import { all, takeLatest } from 'redux-saga/effects'
import { GetAllPlansActionKeys } from './plans/get/action'
import { fetchGetAllPlans } from './plans/get/sagas'
import { UpdatePlanActionKeys } from './plans/update/action'
import { fetchUpdatePlan } from './plans/update/sagas'

export function* rootSaga() {
	yield all([
		takeLatest(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START, fetchGetAllPlans),
		takeLatest(UpdatePlanActionKeys.FETCH_UPDATE_PLAN_START, fetchUpdatePlan)
	])
}
