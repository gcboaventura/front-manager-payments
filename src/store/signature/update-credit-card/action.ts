import { RequestUpdateCreditCardSignature, ResponseUpdateCreditCardSignature } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum UpdateCreditCardSignatureActionKeys {
	FETCH_UPDATE_CREDIT_CARD_SIGNATURE_START = '[LOGIN] FETCH_UPDATE_CREDIT_CARD_SIGNATURE_START',
	FETCH_UPDATE_CREDIT_CARD_SIGNATURE_SUCCESS = '[LOGIN] FETCH_UPDATE_CREDIT_CARD_SIGNATURE_SUCCESS',
	FETCH_UPDATE_CREDIT_CARD_SIGNATURE_FALIED = '[LOGIN] FETCH_UPDATE_CREDIT_CARD_SIGNATURE_FALIED'
}

export const UpdateCreditCardSignatureActions = {
	fetchUpdateCreditCardSignature: (
		data: RequestUpdateCreditCardSignature
	): fetchUpdateCreditCardSignatureAction =>
		createAction(
			UpdateCreditCardSignatureActionKeys.FETCH_UPDATE_CREDIT_CARD_SIGNATURE_START,
			data
		),
	fetchUpdateCreditCardSignatureSuccess: (
		card: ResponseUpdateCreditCardSignature
	): fetchUpdateCreditCardSignatureSuccessAction =>
		createAction(
			UpdateCreditCardSignatureActionKeys.FETCH_UPDATE_CREDIT_CARD_SIGNATURE_SUCCESS,
			card
		),
	fetchUpdateCreditCardSignatureFalied: (
		error: Error
	): fetchUpdateCreditCardSignatureFaliedAction =>
		createAction(
			UpdateCreditCardSignatureActionKeys.FETCH_UPDATE_CREDIT_CARD_SIGNATURE_FALIED,
			error
		)
}

export type UpdateCreditCardSignatureActionUnion = ActionsUnion<
	typeof UpdateCreditCardSignatureActions
>

export type fetchUpdateCreditCardSignatureAction = Action<
	UpdateCreditCardSignatureActionKeys.FETCH_UPDATE_CREDIT_CARD_SIGNATURE_START,
	RequestUpdateCreditCardSignature
>

export type fetchUpdateCreditCardSignatureSuccessAction = Action<
	UpdateCreditCardSignatureActionKeys.FETCH_UPDATE_CREDIT_CARD_SIGNATURE_SUCCESS,
	ResponseUpdateCreditCardSignature
>

export type fetchUpdateCreditCardSignatureFaliedAction = Action<
	UpdateCreditCardSignatureActionKeys.FETCH_UPDATE_CREDIT_CARD_SIGNATURE_FALIED,
	Error
>
