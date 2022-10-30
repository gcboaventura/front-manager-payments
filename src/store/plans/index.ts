import { combineReducers } from 'redux'
import GetAllPlansReducer from './get/reducer'
import UpdatePlanReducer from './update/reducer'

export default combineReducers({
	getAll: GetAllPlansReducer,
	update: UpdatePlanReducer
})
