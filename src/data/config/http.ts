import axios, { Axios, AxiosResponse } from 'axios'

export enum StatusCode {
	Unauthorized = 401
}

export const Http: Axios = axios

const jsonType: string = 'application/json'

Http.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

Http.defaults.headers.common['Authorization'] = ''

Http.defaults.headers.post['Content-Type'] = jsonType

Http.defaults.headers.get['Content-Type'] = jsonType

Http.defaults.headers.delete['Content-Type'] = jsonType

Http.defaults.headers.patch['Content-Type'] = jsonType

Http.interceptors.response.use((response: AxiosResponse<any, any>): any => {
	if (response.status === StatusCode.Unauthorized) {
		window.location.href = '/'
	}
})
