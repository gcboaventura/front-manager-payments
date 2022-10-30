import { CreditCardAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchUpdateCreditCardAction, UpdateCreditCardActions } from './action'

export function* fetchUpdateCreditCard(action: fetchUpdateCreditCardAction) {
	const CreditCardApi = new CreditCardAPI()

	const { onFalied, onSuccess } = action.payload

	try {
		const { data } = yield call(CreditCardApi.update, action.payload)

		yield put(UpdateCreditCardActions.fetchUpdateCreditCardSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'Cartão atualizado com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(UpdateCreditCardActions.fetchUpdateCreditCardFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao atualizar cartão',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
