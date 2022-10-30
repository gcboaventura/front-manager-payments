export interface RequestGetAccount {
	id: number
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseGetAccount {}
