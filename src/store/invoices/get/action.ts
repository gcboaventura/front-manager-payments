import { HttpResponse, RequestGetAllInvoices, ResponseGetAllInvoices } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum GetAllInvoicesActionKeys {
	FETCH_GET_ALL_INVOICES_START = '[LOGIN] FETCH_GET_ALL_INVOICES_START',
	FETCH_GET_ALL_INVOICES_SUCCESS = '[LOGIN] FETCH_GET_ALL_INVOICES_SUCCESS',
	FETCH_GET_ALL_INVOICES_FALIED = '[LOGIN] FETCH_GET_ALL_INVOICES_FALIED'
}

export const GetAllInvoicesActions = {
	fetchGetAllInvoices: (data: RequestGetAllInvoices): fetchGetAllInvoicesAction =>
		createAction(GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_START, data),
	fetchGetAllInvoicesSuccess: (
		card: HttpResponse<ResponseGetAllInvoices>
	): fetchGetAllInvoicesSuccessAction =>
		createAction(GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_SUCCESS, card),
	fetchGetAllInvoicesFalied: (error: Error): fetchGetAllInvoicesFaliedAction =>
		createAction(GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_FALIED, error)
}

export type GetAllInvoicesActionUnion = ActionsUnion<typeof GetAllInvoicesActions>

export type fetchGetAllInvoicesAction = Action<
	GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_START,
	RequestGetAllInvoices
>

export type fetchGetAllInvoicesSuccessAction = Action<
	GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_SUCCESS,
	HttpResponse<ResponseGetAllInvoices>
>

export type fetchGetAllInvoicesFaliedAction = Action<
	GetAllInvoicesActionKeys.FETCH_GET_ALL_INVOICES_FALIED,
	Error
>
