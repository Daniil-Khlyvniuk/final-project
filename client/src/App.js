import React from 'react'
import Header from './components/NavBar/NavBar'
import Footer from './components/Footer'

import AppRoutes from './routes/AppRoutes'
import { useSelector } from 'react-redux'
import { modalSelectors } from './store/Modal'


const App = () => {
	const modal = useSelector(modalSelectors.checkOpen())

	return (

		<div className={'App'}>
			<Header />
			<AppRoutes />

			<Footer />
			{modal}
		</div>
	)
}

export default App
