import React from 'react'
import CardList from './components/CardList/CardList'
import Catalog from './components/Catalog/Catalog'
import NavBar from './components/NavBar/NavBar'
import { Typography } from '@mui/material'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
// eslint-disable-next-line no-duplicate-imports
import { Container } from '@mui/material'
import cardActions from './store/Card'
import { useDispatch } from 'react-redux'

const App = () => {
	// it is an example of dispatching actions
	const dispatch = useDispatch()
	dispatch(cardActions.test())
	dispatch(cardActions.test2('it works'))
	//========================================

	return (
		<div className={ 'App' }>
			<Container maxWidth="lg">
				<AppRoutes/>
			</Container>
			<CardList />
			<Catalog />
			<NavBar />
			<Footer />

		</div>
	)
}


export default App
