import { HttpResponse, RequestAddSignature, ResponseAddSignature } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum AddSignatureActionKeys {
	FETCH_ADD_SIGNATURE_START = '[LOGIN] FETCH_ADD_SIGNATURE_START',
	FETCH_ADD_SIGNATURE_SUCCESS = '[LOGIN] FETCH_ADD_SIGNATURE_SUCCESS',
	FETCH_ADD_SIGNATURE_FALIED = '[LOGIN] FETCH_ADD_SIGNATURE_FALIED'
}

export const AddSignatureActions = {
	fetchAddSignature: (data: RequestAddSignature): fetchAddSignatureAction =>
		createAction(AddSignatureActionKeys.FETCH_ADD_SIGNATURE_START, data),
	fetchAddSignatureSuccess: (
		card: HttpResponse<ResponseAddSignature>
	): fetchAddSignatureSuccessAction =>
		createAction(AddSignatureActionKeys.FETCH_ADD_SIGNATURE_SUCCESS, card),
	fetchAddSignatureFalied: (error: Error): fetchAddSignatureFaliedAction =>
		createAction(AddSignatureActionKeys.FETCH_ADD_SIGNATURE_FALIED, error)
}

export type AddSignatureActionUnion = ActionsUnion<typeof AddSignatureActions>

export type fetchAddSignatureAction = Action<
	AddSignatureActionKeys.FETCH_ADD_SIGNATURE_START,
	RequestAddSignature
>

export type fetchAddSignatureSuccessAction = Action<
	AddSignatureActionKeys.FETCH_ADD_SIGNATURE_SUCCESS,
	HttpResponse<ResponseAddSignature>
>

export type fetchAddSignatureFaliedAction = Action<
	AddSignatureActionKeys.FETCH_ADD_SIGNATURE_FALIED,
	Error
>
