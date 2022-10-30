import { PaypalAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchAddPaypalAction, AddPaypalActions } from './action'

export function* fetchAddPaypal(action: fetchAddPaypalAction) {
	const PaypalApi = new PaypalAPI()

	const { onFalied, onSuccess } = action.payload

	try {
		const { data } = yield call(PaypalApi.add, action.payload)

		yield put(AddPaypalActions.fetchAddPaypalSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'E-mail adicionado com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(AddPaypalActions.fetchAddPaypalFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao adicionar e-mail.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
