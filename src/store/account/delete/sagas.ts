import { AccountAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchDeleteAccountAction, DeleteAccountActions } from './action'

export function* fetchDeleteAccount(action: fetchDeleteAccountAction) {
	const accountAPI = new AccountAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(accountAPI.delete, action.payload)

		yield put(DeleteAccountActions.fetchDeleteAccountSuccess(data))

		yield put(
			AlertActions.ShowAlert({
				message: 'Conta excluída com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(DeleteAccountActions.fetchDeleteAccountFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({ message: 'Erro ao excluir conta.', variant: 'danger', show: true })
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
