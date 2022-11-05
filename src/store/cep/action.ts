import { RequestGetCep, ResponseGetCep } from '@/models'
import { createAction, ActionsUnion, Action } from '../action-helpers'

export enum GetCepActionKeys {
	FETCH_GET_CEP_START = '[LOGIN] FETCH_GET_CEP_START',
	FETCH_GET_CEP_SUCCESS = '[LOGIN] FETCH_GET_CEP_SUCCESS',
	FETCH_GET_CEP_FALIED = '[LOGIN] FETCH_GET_CEP_FALIED'
}

export const GetCepActions = {
	fetchGetCep: (data: RequestGetCep): fetchGetCepAction =>
		createAction(GetCepActionKeys.FETCH_GET_CEP_START, data),
	fetchGetCepSuccess: (card: ResponseGetCep): fetchGetCepSuccessAction =>
		createAction(GetCepActionKeys.FETCH_GET_CEP_SUCCESS, card),
	fetchGetCepFalied: (error: Error): fetchGetCepFaliedAction =>
		createAction(GetCepActionKeys.FETCH_GET_CEP_FALIED, error)
}

export type GetCepActionUnion = ActionsUnion<typeof GetCepActions>

export type fetchGetCepAction = Action<GetCepActionKeys.FETCH_GET_CEP_START, RequestGetCep>

export type fetchGetCepSuccessAction = Action<
	GetCepActionKeys.FETCH_GET_CEP_SUCCESS,
	ResponseGetCep
>

export type fetchGetCepFaliedAction = Action<GetCepActionKeys.FETCH_GET_CEP_FALIED, Error>
