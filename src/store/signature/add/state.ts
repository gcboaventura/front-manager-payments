import { HttpResponse, ResponseAddSignature } from '@/models'

export interface AddSignatureState {
	data: HttpResponse<ResponseAddSignature>
	isLoading: boolean
	error?: Error
}
