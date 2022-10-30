import { HttpResponse, RequestUpdatePaypal, ResponseUpdatePaypal } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum UpdatePaypalActionKeys {
	FETCH_UPDATE_PAYPAL_START = '[LOGIN] FETCH_UPDATE_PAYPAL_START',
	FETCH_UPDATE_PAYPAL_SUCCESS = '[LOGIN] FETCH_UPDATE_PAYPAL_SUCCESS',
	FETCH_UPDATE_PAYPAL_FALIED = '[LOGIN] FETCH_UPDATE_PAYPAL_FALIED'
}

export const UpdatePaypalActions = {
	fetchUpdatePaypal: (data: RequestUpdatePaypal): fetchUpdatePaypalAction =>
		createAction(UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_START, data),
	fetchUpdatePaypalSuccess: (
		card: HttpResponse<ResponseUpdatePaypal>
	): fetchUpdatePaypalSuccessAction =>
		createAction(UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_SUCCESS, card),
	fetchUpdatePaypalFalied: (error: Error): fetchUpdatePaypalFaliedAction =>
		createAction(UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_FALIED, error)
}

export type UpdatePaypalActionUnion = ActionsUnion<typeof UpdatePaypalActions>

export type fetchUpdatePaypalAction = Action<
	UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_START,
	RequestUpdatePaypal
>

export type fetchUpdatePaypalSuccessAction = Action<
	UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_SUCCESS,
	HttpResponse<ResponseUpdatePaypal>
>

export type fetchUpdatePaypalFaliedAction = Action<
	UpdatePaypalActionKeys.FETCH_UPDATE_PAYPAL_FALIED,
	Error
>
