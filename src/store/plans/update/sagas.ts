import { PlanAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchUpdatePlanAction, UpdatePlanActions } from './action'

export function* fetchUpdatePlan(action: fetchUpdatePlanAction) {
	const planAPI = new PlanAPI()

	const { onFalied, onSuccess } = action.payload

	try {
		const { data } = yield call(planAPI.update, action.payload)

		yield put(UpdatePlanActions.fetchUpdatePlanSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'Plano atualizado com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(UpdatePlanActions.fetchUpdatePlanFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao atualizar plano.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
