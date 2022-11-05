import axios, { Axios } from 'axios'
import { IncomingHttpHeaders } from 'http'

const headers: IncomingHttpHeaders = {
	'Content-Type': 'application/json; charset=UTF-8',
	'Access-Control-Allow-Origin': '*'
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const Http: Axios = axios.create({
	headers,
	baseURL
})
