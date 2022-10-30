import { UpdatePlanState } from './state'
import { UpdatePlanActionUnion, UpdatePlanActionKeys } from './action'

const initialState: UpdatePlanState = {
	data: {
		body: {}
	},
	isLoading: false
}

const UpdatePlanReducer = (
	state = initialState,
	action: UpdatePlanActionUnion
): UpdatePlanState => {
	switch (action.type) {
		case UpdatePlanActionKeys.FETCH_UPDATE_PLAN_START:
			return {
				...state,
				isLoading: true
			}
		case UpdatePlanActionKeys.FETCH_UPDATE_PLAN_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case UpdatePlanActionKeys.FETCH_UPDATE_PLAN_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default UpdatePlanReducer
