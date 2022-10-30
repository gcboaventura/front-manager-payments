import { combineReducers } from 'redux'
import GetAllInvoicesReducer from './get/reducer'

export default combineReducers({
	getAll: GetAllInvoicesReducer
})
