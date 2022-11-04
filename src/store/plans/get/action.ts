import { HttpResponse, RequestGetAllPlans, ResponseGetAllPlans } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum GetAllPlansActionKeys {
	FETCH_GET_ALL_PLANS_START = '[LOGIN] FETCH_GET_ALL_PLANS_START',
	FETCH_GET_ALL_PLANS_SUCCESS = '[LOGIN] FETCH_GET_ALL_PLANS_SUCCESS',
	FETCH_GET_ALL_PLANS_FALIED = '[LOGIN] FETCH_GET_ALL_PLANS_FALIED'
}

export const GetAllPlansActions = {
	fetchGetAllPlans: (data: RequestGetAllPlans): fetchGetAllPlansAction =>
		createAction(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START, data),
	fetchGetAllPlansSuccess: (card: ResponseGetAllPlans[]): fetchGetAllPlansSuccessAction =>
		createAction(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_SUCCESS, card),
	fetchGetAllPlansFalied: (error: Error): fetchGetAllPlansFaliedAction =>
		createAction(GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_FALIED, error)
}

export type GetAllPlansActionUnion = ActionsUnion<typeof GetAllPlansActions>

export type fetchGetAllPlansAction = Action<
	GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START,
	RequestGetAllPlans
>

export type fetchGetAllPlansSuccessAction = Action<
	GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_SUCCESS,
	ResponseGetAllPlans[]
>

export type fetchGetAllPlansFaliedAction = Action<
	GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_FALIED,
	Error
>
