import { combineReducers } from 'redux'
import DeleteAccountReducer from './delete/reducer'
import GetAccountReducer from './get/reducer'

export default combineReducers({
	get: GetAccountReducer,
	delete: DeleteAccountReducer
})
