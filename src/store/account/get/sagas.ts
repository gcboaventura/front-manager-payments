import { AccountAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchGetAccountAction, GetAccountActions } from './action'

export function* fetchGetAccount(action: fetchGetAccountAction) {
	const accountAPI = new AccountAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(accountAPI.get, action.payload)

		yield put(GetAccountActions.fetchGetAccountSuccess(data))

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(GetAccountActions.fetchGetAccountFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({ message: 'Erro ao buscar conta.', variant: 'danger', show: true })
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
