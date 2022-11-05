import { SignatureAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchAddSignatureAction, AddSignatureActions } from './action'

export function* fetchAddSignature(action: fetchAddSignatureAction) {
	const signatureAPI = new SignatureAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(signatureAPI.add, action.payload)

		yield put(AddSignatureActions.fetchAddSignatureSuccess(data))

		localStorage.setItem('id', JSON.stringify(data.id))

		yield put(
			AlertActions.ShowAlert({
				message: 'Assinatura realizada com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(AddSignatureActions.fetchAddSignatureFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao realizar assinatura.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
