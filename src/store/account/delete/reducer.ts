import { DeleteAccountState } from './state'
import { DeleteAccountActionUnion, DeleteAccountActionKeys } from './action'

const initialState: DeleteAccountState = {
	data: {
		body: {}
	},
	isLoading: false
}

const DeleteAccountReducer = (
	state = initialState,
	action: DeleteAccountActionUnion
): DeleteAccountState => {
	switch (action.type) {
		case DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_START:
			return {
				...state,
				isLoading: true
			}
		case DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default DeleteAccountReducer
