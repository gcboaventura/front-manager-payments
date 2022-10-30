import { CreditCardAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchDeleteCreditCardAction, DeleteCreditCardActions } from './action'

export function* fetchDeleteCreditCard(action: fetchDeleteCreditCardAction) {
	const CreditCardApi = new CreditCardAPI()

	const { onFalied, onSuccess } = action.payload

	try {
		const { data } = yield call(CreditCardApi.delete, action.payload)

		yield put(DeleteCreditCardActions.fetchDeleteCreditCardSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'Cartão excluído com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(DeleteCreditCardActions.fetchDeleteCreditCardFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao excluir cartão',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
