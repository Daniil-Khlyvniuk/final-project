import React from 'react'
import CardList from './components/CardList/CardList'
import Catalog from './components/Catalog/Catalog'
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
// eslint-disable-next-line no-duplicate-imports
import { Container } from '@mui/material'

import Popular from './components/Popular/Popular'

import cardActions from './store/Card'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line no-duplicate-imports
import Header from './components/NavBar/NavBar'


const App = () => {
	// it is an example of dispatching actions
	const dispatch = useDispatch()
	dispatch(cardActions.test())
	dispatch(cardActions.test2('it works'))
	//========================================

	return (
		<div className={ 'App' }>
			<Header/>
			<Container maxWidth="lg">
				<AppRoutes />
			</Container>
			<CardList />
			<Popular/>
			<Catalog />
			<Footer />

		</div>
	)
}


export default App
