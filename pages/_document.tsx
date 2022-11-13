import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	public render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'
						integrity='sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw=='
						crossOrigin='anonymous'
						referrerPolicy='no-referrer'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
