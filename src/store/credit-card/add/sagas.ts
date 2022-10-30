import { CreditCardAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchAddCreditCardAction, AddCreditCardActions } from './action'

export function* fetchAddCreditCard(action: fetchAddCreditCardAction) {
	const CreditCardApi = new CreditCardAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(CreditCardApi.add, action.payload)

		yield put(AddCreditCardActions.fetchAddCreditCardSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'Cartão adicionado com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(AddCreditCardActions.fetchAddCreditCardFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({ message: 'Erro ao adicionar cartão', variant: 'danger', show: true })
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
