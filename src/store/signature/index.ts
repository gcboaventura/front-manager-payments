import { combineReducers } from 'redux'
import AddSignatureReducer from './add/reducer'
import GetSignatureReducer from './get/reducer'

export default combineReducers({
	add: AddSignatureReducer,
	get: GetSignatureReducer
})
