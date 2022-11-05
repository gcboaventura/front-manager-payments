import { AddSignatureState } from './state'
import { AddSignatureActionUnion, AddSignatureActionKeys } from './action'

const initialState: AddSignatureState = {
	data: {
		body: {}
	},
	isLoading: false
}

const AddSignatureReducer = (
	state = initialState,
	action: AddSignatureActionUnion
): AddSignatureState => {
	switch (action.type) {
		case AddSignatureActionKeys.FETCH_ADD_SIGNATURE_START:
			return {
				...state,
				isLoading: true
			}
		case AddSignatureActionKeys.FETCH_ADD_SIGNATURE_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case AddSignatureActionKeys.FETCH_ADD_SIGNATURE_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default AddSignatureReducer
