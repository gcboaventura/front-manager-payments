import { PaypalAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchDeletePaypalAction, DeletePaypalActions } from './action'

export function* fetchDeletePaypal(action: fetchDeletePaypalAction) {
	const paypalAPI = new PaypalAPI()

	const { onFalied, onSuccess } = action.payload

	try {
		const { data } = yield call(paypalAPI.delete, action.payload)

		yield put(DeletePaypalActions.fetchDeletePaypalSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'E-mail excluído com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(DeletePaypalActions.fetchDeletePaypalFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao excluir e-mail.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
