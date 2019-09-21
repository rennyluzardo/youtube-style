import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="es">
				<Head>
					<script>window.dataLayer = window.dataLayer || [];</script>
					<title>UTube-Style</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
