import { Http } from '../config/http'
import { HttpResponse, RequestGetAllInvoices, ResponseGetAllInvoices } from '@/models'

interface InvoiceApiModel {
	getAll(data: RequestGetAllInvoices): Promise<HttpResponse<ResponseGetAllInvoices>>
}

export class InvoiceAPI implements InvoiceApiModel {
	async getAll(data: RequestGetAllInvoices): Promise<HttpResponse<ResponseGetAllInvoices>> {
		const url = '/get-all-invoices'
		return Http.get(url)
	}
}
