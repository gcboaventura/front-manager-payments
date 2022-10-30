import { HttpResponse, RequestDeletePaypal, ResponseDeletePaypal } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum DeletePaypalActionKeys {
	FETCH_DELETE_PAYPAL_START = '[LOGIN] FETCH_DELETE_PAYPAL_START',
	FETCH_DELETE_PAYPAL_SUCCESS = '[LOGIN] FETCH_DELETE_PAYPAL_SUCCESS',
	FETCH_DELETE_PAYPAL_FALIED = '[LOGIN] FETCH_DELETE_PAYPAL_FALIED'
}

export const DeletePaypalActions = {
	fetchDeletePaypal: (data: RequestDeletePaypal): fetchDeletePaypalAction =>
		createAction(DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_START, data),
	fetchDeletePaypalSuccess: (
		card: HttpResponse<ResponseDeletePaypal>
	): fetchDeletePaypalSuccessAction =>
		createAction(DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_SUCCESS, card),
	fetchDeletePaypalFalied: (error: Error): fetchDeletePaypalFaliedAction =>
		createAction(DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_FALIED, error)
}

export type DeletePaypalActionUnion = ActionsUnion<typeof DeletePaypalActions>

export type fetchDeletePaypalAction = Action<
	DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_START,
	RequestDeletePaypal
>

export type fetchDeletePaypalSuccessAction = Action<
	DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_SUCCESS,
	HttpResponse<ResponseDeletePaypal>
>

export type fetchDeletePaypalFaliedAction = Action<
	DeletePaypalActionKeys.FETCH_DELETE_PAYPAL_FALIED,
	Error
>
