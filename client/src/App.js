import React, {useEffect} from 'react'
import Header from './components/NavBar/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { useSelector } from 'react-redux'
import { modalSelectors } from './store/Modal'
import useAuthToken from './utils/customHooks/useAuthToken'
import ScrollButton from './components/ScrollButton/ScrollButton'
import { Helmet, HelmetProvider  } from 'react-helmet-async'
// import Scroll from './components/Scroll/Scroll'


const App = () => {
	const modal = useSelector(modalSelectors.checkOpen())

	const [checkToken] = useAuthToken()
	useEffect(() => {
		checkToken()
	},[checkToken])
	
	return (
		<div className={'App'}>
			<Header />
			<AppRoutes />
			<Footer />
			<ScrollButton/>
			{/*<Scroll/>*/}
			{modal}
			<HelmetProvider>
				<Helmet>
					<html lang='en'/>
					<meta name='description' content='Bedding Shop'/>
					<meta name='keywords' content='bedroom, Kitchen, Loungewear, bedding store, luxury bedding sets, king size bedspreads, king bed sheets, comforters on sale' />
				</Helmet>
			</HelmetProvider>
		</div>
	)
}

export default App
