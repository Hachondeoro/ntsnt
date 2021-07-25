import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-GB">
				<Head>
          			<meta charSet="UTF-8"/>
					{/* <title>Kindness Shake</title> */}
					<meta property="og:title" content="Kindness Shake" />
					<meta property="og:description" content="You need a hand? We'll give you a #KindnessShake" />
					<meta name="description" content="You need a hand? We will give you a #KindnessShake!"/>
					<meta property="og:image" content="https://kindness-shake.com.au/webPreview.jpg"/>
					<link property="image" href="https://kindness-shake.com.au/webPreview.jpg" />
					<meta property="og:type" content="website" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
