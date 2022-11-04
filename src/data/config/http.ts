import axios, { Axios } from 'axios'

import { IncomingHttpHeaders } from 'http'

const headers: IncomingHttpHeaders = {
	'content-type': 'application/json'
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const Http: Axios = axios.create({
	headers,
	baseURL
})
