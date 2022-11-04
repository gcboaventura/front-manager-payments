import { HttpResponse, ResponseGetAllInvoices } from '@/models'

export interface GetAllInvoicesState {
	data: HttpResponse<ResponseGetAllInvoices>
	isLoading: boolean
	error?: Error
}
