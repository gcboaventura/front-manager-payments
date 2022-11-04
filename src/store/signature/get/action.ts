import { HttpResponse, RequestGetSignature, ResponseGetSignature } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum GetSignaturesActionKeys {
	FETCH_GET_ALL_INVOICES_START = '[LOGIN] FETCH_GET_ALL_INVOICES_START',
	FETCH_GET_ALL_INVOICES_SUCCESS = '[LOGIN] FETCH_GET_ALL_INVOICES_SUCCESS',
	FETCH_GET_ALL_INVOICES_FALIED = '[LOGIN] FETCH_GET_ALL_INVOICES_FALIED'
}

export const GetSignaturesActions = {
	fetchGetSignatures: (data: RequestGetSignature): fetchGetSignaturesAction =>
		createAction(GetSignaturesActionKeys.FETCH_GET_ALL_INVOICES_START, data),
	fetchGetSignaturesSuccess: (
		card: HttpResponse<ResponseGetSignature>
	): fetchGetSignaturesSuccessAction =>
		createAction(GetSignaturesActionKeys.FETCH_GET_ALL_INVOICES_SUCCESS, card),
	fetchGetSignaturesFalied: (error: Error): fetchGetSignaturesFaliedAction =>
		createAction(GetSignaturesActionKeys.FETCH_GET_ALL_INVOICES_FALIED, error)
}

export type GetSignaturesActionUnion = ActionsUnion<typeof GetSignaturesActions>

export type fetchGetSignaturesAction = Action<
	GetSignaturesActionKeys.FETCH_GET_ALL_INVOICES_START,
	RequestGetSignature
>

export type fetchGetSignaturesSuccessAction = Action<
	GetSignaturesActionKeys.FETCH_GET_ALL_INVOICES_SUCCESS,
	HttpResponse<ResponseGetSignature>
>

export type fetchGetSignaturesFaliedAction = Action<
	GetSignaturesActionKeys.FETCH_GET_ALL_INVOICES_FALIED,
	Error
>
