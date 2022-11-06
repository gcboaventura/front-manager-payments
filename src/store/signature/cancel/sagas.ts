import { SignatureAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { GetSignatureActions } from '../get/action'
import { fetchCancelSignatureAction, CancelSignatureActions } from './action'

export function* fetchCancelSignature(action: fetchCancelSignatureAction) {
	const signatureAPI = new SignatureAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(signatureAPI.cancel, action.payload)

		yield put(CancelSignatureActions.fetchCancelSignatureSuccess(data))

		localStorage.removeItem('id')

		yield put(GetSignatureActions.fetchGetSignature({ id: '' }))

		yield put(
			AlertActions.ShowAlert({
				message: 'Assinatura cancelada com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(CancelSignatureActions.fetchCancelSignatureFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao cancelar assinatura.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
