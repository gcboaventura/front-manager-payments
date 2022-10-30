import { GetAccountState } from './state'
import { GetAccountActionUnion, GetAccountActionKeys } from './action'

const initialState: GetAccountState = {
	data: {
		body: {}
	},
	isLoading: false
}

const GetAccountReducer = (
	state = initialState,
	action: GetAccountActionUnion
): GetAccountState => {
	switch (action.type) {
		case GetAccountActionKeys.FETCH_GET_ACCOUNT_START:
			return {
				...state,
				isLoading: true
			}
		case GetAccountActionKeys.FETCH_GET_ACCOUNT_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case GetAccountActionKeys.FETCH_GET_ACCOUNT_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default GetAccountReducer
