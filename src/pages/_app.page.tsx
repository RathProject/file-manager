import type { AppProps } from 'next/app';
import Wrapper from '../components/Wrapper';
import '../styles/globals.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
}
