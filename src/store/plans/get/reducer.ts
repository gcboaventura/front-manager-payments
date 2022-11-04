import { GetAllPlansState } from './state'
import { GetAllPlansActionUnion, GetAllPlansActionKeys } from './action'

const initialState: GetAllPlansState = {
	data: [],
	isLoading: false
}

const GetAllPlansReducer = (
	state = initialState,
	action: GetAllPlansActionUnion
): GetAllPlansState => {
	switch (action.type) {
		case GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_START:
			return {
				...state,
				isLoading: true
			}
		case GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case GetAllPlansActionKeys.FETCH_GET_ALL_PLANS_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default GetAllPlansReducer
