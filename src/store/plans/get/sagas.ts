import { PlanAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchGetAllPlansAction, GetAllPlansActions } from './action'

export function* fetchGetAllPlans(action: fetchGetAllPlansAction) {
	const planAPI = new PlanAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(planAPI.getAll, action.payload)

		yield put(GetAllPlansActions.fetchGetAllPlansSuccess(data))

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(GetAllPlansActions.fetchGetAllPlansFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({ message: 'Erro ao buscar planos.', variant: 'danger', show: true })
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
