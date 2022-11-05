import { HttpResponse, ResponseGetSignature } from '@/models'

export interface GetSignatureState {
	data: HttpResponse<ResponseGetSignature>
	isLoading: boolean
	error?: Error
}
