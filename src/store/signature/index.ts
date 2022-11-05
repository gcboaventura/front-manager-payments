import { combineReducers } from 'redux'
import AddSignatureReducer from './add/reducer'

export default combineReducers({
	add: AddSignatureReducer
})
