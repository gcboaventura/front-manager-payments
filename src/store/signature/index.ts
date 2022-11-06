import { combineReducers } from 'redux'
import AddSignatureReducer from './add/reducer'
import CancelSignatureReducer from './cancel/reducer'
import GetSignatureReducer from './get/reducer'

export default combineReducers({
	add: AddSignatureReducer,
	get: GetSignatureReducer,
	cancel: CancelSignatureReducer
})
