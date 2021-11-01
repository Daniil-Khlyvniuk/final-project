import React from 'react'

import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'

const App = () => {
	return (
		<div className={ 'App' }>
			<NavBar />
			<AppRoutes />

			<Footer />
		</div>
	)
}

export default App