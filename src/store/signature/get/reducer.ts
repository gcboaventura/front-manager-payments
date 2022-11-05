import { GetSignatureState } from './state'
import { GetSignatureActionUnion, GetSignatureActionKeys } from './action'

const initialState: GetSignatureState = {
	data: {
		body: {}
	},
	isLoading: false
}

const GetSignatureReducer = (
	state = initialState,
	action: GetSignatureActionUnion
): GetSignatureState => {
	switch (action.type) {
		case GetSignatureActionKeys.FETCH_GET_SIGNATURE_START:
			return {
				...state,
				isLoading: true
			}
		case GetSignatureActionKeys.FETCH_GET_SIGNATURE_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false
			}
		case GetSignatureActionKeys.FETCH_GET_SIGNATURE_FALIED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default GetSignatureReducer
