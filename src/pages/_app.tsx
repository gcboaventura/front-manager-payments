import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '@/style/global.css'

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Pagamentos</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default App
