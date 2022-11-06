import { SignatureAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { GetSignatureActions } from '../get/action'
import { fetchUpdateCreditCardSignatureAction, UpdateCreditCardSignatureActions } from './action'

export function* fetchUpdateCreditCardSignature(action: fetchUpdateCreditCardSignatureAction) {
	const signatureAPI = new SignatureAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(signatureAPI.updateCreditCard, action.payload)

		yield put(UpdateCreditCardSignatureActions.fetchUpdateCreditCardSignatureSuccess(data))

		yield put(GetSignatureActions.fetchGetSignature({ id: data.id }))

		yield put(
			AlertActions.ShowAlert({
				message: 'Cartão de crédito atualizado com sucesso !',
				variant: 'success',
				show: true
			})
		)

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(UpdateCreditCardSignatureActions.fetchUpdateCreditCardSignatureFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({
				message: 'Erro ao atualizar cartão de crédito.',
				variant: 'danger',
				show: true
			})
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
