export interface RequestGetCep {
	cep: string
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseGetCep {
	cep: string
	logradouro: string
	complemento: string
	bairro: string
	localidade: string
	uf: string
	ibge: string
	gia: string
	ddd: string
	siafi: string
}
