import { SignatureAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchGetSignatureAction, GetSignatureActions } from './action'

export function* fetchGetSignature(action: fetchGetSignatureAction) {
	const signatureAPI = new SignatureAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(signatureAPI.get, action.payload)

		yield put(GetSignatureActions.fetchGetSignatureSuccess(data))

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(GetSignatureActions.fetchGetSignatureFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao buscar assinatura.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
