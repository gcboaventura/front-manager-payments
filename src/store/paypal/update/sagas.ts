import { PaypalAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchUpdatePaypalAction, UpdatePaypalActions } from './action'

export function* fetchUpdatePaypal(action: fetchUpdatePaypalAction) {
	const PaypalApi = new PaypalAPI()

	const { onFalied, onSuccess } = action.payload

	try {
		const { data } = yield call(PaypalApi.update, action.payload)

		yield put(UpdatePaypalActions.fetchUpdatePaypalSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'E-mail atualizado com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(UpdatePaypalActions.fetchUpdatePaypalFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao atualizar e-mail.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
