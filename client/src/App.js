import React from 'react'
import Header from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { Container } from '@mui/material'
import Popular from './components/Popular/Popular'

const App = () => {
	return (
		<div className={'App'}>
			<Header />
			<Container maxWidth="lg">
				<AppRoutes />
				<Popular/>
			</Container>
			<Footer />
		</div>
	)
}

export default App