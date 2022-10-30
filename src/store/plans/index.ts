import { combineReducers } from 'redux'
import GetAllPlansReducer from './get/reducer'

export default combineReducers({
	get: GetAllPlansReducer
})
