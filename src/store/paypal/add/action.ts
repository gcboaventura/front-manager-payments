import { HttpResponse, RequestAddPaypal, ResponseAddPaypal } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum AddPaypalActionKeys {
	FETCH_ADD_PAYPAL_START = '[LOGIN] FETCH_ADD_PAYPAL_START',
	FETCH_ADD_PAYPAL_SUCCESS = '[LOGIN] FETCH_ADD_PAYPAL_SUCCESS',
	FETCH_ADD_PAYPAL_FALIED = '[LOGIN] FETCH_ADD_PAYPAL_FALIED'
}

export const AddPaypalActions = {
	fetchAddPaypal: (data: RequestAddPaypal): fetchAddPaypalAction =>
		createAction(AddPaypalActionKeys.FETCH_ADD_PAYPAL_START, data),
	fetchAddPaypalSuccess: (card: HttpResponse<ResponseAddPaypal>): fetchAddPaypalSuccessAction =>
		createAction(AddPaypalActionKeys.FETCH_ADD_PAYPAL_SUCCESS, card),
	fetchAddPaypalFalied: (error: Error): fetchAddPaypalFaliedAction =>
		createAction(AddPaypalActionKeys.FETCH_ADD_PAYPAL_FALIED, error)
}

export type AddPaypalActionUnion = ActionsUnion<typeof AddPaypalActions>

export type fetchAddPaypalAction = Action<
	AddPaypalActionKeys.FETCH_ADD_PAYPAL_START,
	RequestAddPaypal
>

export type fetchAddPaypalSuccessAction = Action<
	AddPaypalActionKeys.FETCH_ADD_PAYPAL_SUCCESS,
	HttpResponse<ResponseAddPaypal>
>

export type fetchAddPaypalFaliedAction = Action<AddPaypalActionKeys.FETCH_ADD_PAYPAL_FALIED, Error>
