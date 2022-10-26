import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

const App = ({ Component, pageProps }: AppProps) => {
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
