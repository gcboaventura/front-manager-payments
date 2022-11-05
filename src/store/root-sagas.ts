import { all, takeLatest } from 'redux-saga/effects'
import { GetCepActionKeys } from './cep/action'
import { fetchGetCep } from './cep/sagas'
import { GetAllPlansActionKeys } from './plans/get/action'
import { fetchGetAllPlans } from './plans/get/sagas'
import { UpdatePlanActionKeys } from './plans/update/action'
import { fetchUpdatePlan } from './plans/update/sagas'
import { AddSignatureActionKeys } from './signature/add/action'
import { fetchAddSignature } from './signature/add/sagas'
import { GetSignatureActionKeys } from './signature/get/action'
import { fetchGetSignature } from './signature/get/sagas'

export function* rootSaga() {
	yield all([
		takeLatest(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START, fetchGetAllPlans),
		takeLatest(UpdatePlanActionKeys.FETCH_UPDATE_PLAN_START, fetchUpdatePlan),
		takeLatest(GetCepActionKeys.FETCH_GET_CEP_START, fetchGetCep),
		takeLatest(AddSignatureActionKeys.FETCH_ADD_SIGNATURE_START, fetchAddSignature),
		takeLatest(GetSignatureActionKeys.FETCH_GET_SIGNATURE_START, fetchGetSignature)
	])
}
