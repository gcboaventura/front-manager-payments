import { RequestCancelSignature, ResponseCancelSignature } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum CancelSignatureActionKeys {
	FETCH_CANCEL_SIGNATURE_START = '[LOGIN] FETCH_CANCEL_SIGNATURE_START',
	FETCH_CANCEL_SIGNATURE_SUCCESS = '[LOGIN] FETCH_CANCEL_SIGNATURE_SUCCESS',
	FETCH_CANCEL_SIGNATURE_FALIED = '[LOGIN] FETCH_CANCEL_SIGNATURE_FALIED'
}

export const CancelSignatureActions = {
	fetchCancelSignature: (data: RequestCancelSignature): fetchCancelSignatureAction =>
		createAction(CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_START, data),
	fetchCancelSignatureSuccess: (card: ResponseCancelSignature): fetchCancelSignatureSuccessAction =>
		createAction(CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_SUCCESS, card),
	fetchCancelSignatureFalied: (error: Error): fetchCancelSignatureFaliedAction =>
		createAction(CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_FALIED, error)
}

export type CancelSignatureActionUnion = ActionsUnion<typeof CancelSignatureActions>

export type fetchCancelSignatureAction = Action<
	CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_START,
	RequestCancelSignature
>

export type fetchCancelSignatureSuccessAction = Action<
	CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_SUCCESS,
	ResponseCancelSignature
>

export type fetchCancelSignatureFaliedAction = Action<
	CancelSignatureActionKeys.FETCH_CANCEL_SIGNATURE_FALIED,
	Error
>
