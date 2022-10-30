export interface RequestGetAllPlans {
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}
export interface ResponseGetAllPlans {}

export interface RequestUpdatePlan {
	plan: number
	id: number
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseUpdatePlan {}
