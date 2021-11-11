import React from 'react'
import Header from './components/NavBar/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

const App = () => {
	return (
		<div className={'App'}>
			<Header />
			<AppRoutes />
			<Footer />
		</div>
	)
}

export default App
