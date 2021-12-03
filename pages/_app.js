import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>	
			<Navbar/>
			<Component {...pageProps} />
			<div>Footer</div>
		</>
	)
}

export default MyApp;
