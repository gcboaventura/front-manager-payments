import { CepAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchGetCepAction, GetCepActions } from './action'

export function* fetchGetCep(action: fetchGetCepAction) {
	const cepAPI = new CepAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(cepAPI.get, action.payload)

		yield put(GetCepActions.fetchGetCepSuccess(data))

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(GetCepActions.fetchGetCepFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({ message: 'Erro ao buscar o cep.', variant: 'danger', show: true })
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
