import { ResponseGetAccount, HttpResponse } from '@/models'

export interface GetAccountState {
	data: HttpResponse<ResponseGetAccount>
	isLoading: boolean
	error?: Error
}
