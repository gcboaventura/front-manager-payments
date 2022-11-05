import { HttpResponse, RequestGetSignature, ResponseGetSignature } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum GetSignatureActionKeys {
	FETCH_GET_SIGNATURE_START = '[LOGIN] FETCH_GET_SIGNATURE_START',
	FETCH_GET_SIGNATURE_SUCCESS = '[LOGIN] FETCH_GET_SIGNATURE_SUCCESS',
	FETCH_GET_SIGNATURE_FALIED = '[LOGIN] FETCH_GET_SIGNATURE_FALIED'
}

export const GetSignatureActions = {
	fetchGetSignature: (data: RequestGetSignature): fetchGetSignatureAction =>
		createAction(GetSignatureActionKeys.FETCH_GET_SIGNATURE_START, data),
	fetchGetSignatureSuccess: (
		card: HttpResponse<ResponseGetSignature>
	): fetchGetSignatureSuccessAction =>
		createAction(GetSignatureActionKeys.FETCH_GET_SIGNATURE_SUCCESS, card),
	fetchGetSignatureFalied: (error: Error): fetchGetSignatureFaliedAction =>
		createAction(GetSignatureActionKeys.FETCH_GET_SIGNATURE_FALIED, error)
}

export type GetSignatureActionUnion = ActionsUnion<typeof GetSignatureActions>

export type fetchGetSignatureAction = Action<
	GetSignatureActionKeys.FETCH_GET_SIGNATURE_START,
	RequestGetSignature
>

export type fetchGetSignatureSuccessAction = Action<
	GetSignatureActionKeys.FETCH_GET_SIGNATURE_SUCCESS,
	HttpResponse<ResponseGetSignature>
>

export type fetchGetSignatureFaliedAction = Action<
	GetSignatureActionKeys.FETCH_GET_SIGNATURE_FALIED,
	Error
>
