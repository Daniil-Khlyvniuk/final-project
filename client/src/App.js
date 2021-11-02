import React from 'react'
import CardList from './components/CardList/CardList'
import Catalog from './components/Catalog/Catalog'
import NavBar from './components/NavBar/NavBar'
import { Typography } from '@mui/material'
import Header from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { Container } from '@mui/material'

const App = () => {
	return (
		<div className={ 'App' }>
			<h1>F I N A L P R O J E C T</h1>
			<Header />
			<Container maxWidth="lg">
				<AppRoutes />
			</Container>
			<CardList />
			<Catalog />
			<NavBar />
			<Footer />
			<Typography
				variant={'h2'}
				sx={{color: 'primary', fontSize:'primary'}}
			>
				F I N A L P R O J E C T
			</Typography>

		</div>
	)
}

export default App