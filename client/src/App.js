import React from 'react'
import Header from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { Container } from '@mui/material'
import cardActions from './store/Card'
import { useDispatch } from 'react-redux'
import Form from './components/Form/Form'

const App = () => {
	// it is an example of dispatching actions
	const dispatch = useDispatch()
	dispatch(cardActions.test())
	dispatch(cardActions.test2('it works'))

	//========================================

	return (
		<div className={'App'}>
			<Header />
			<Container maxWidth="lg">
				<AppRoutes />
				
			</Container>
			<Footer />
		</div>
	)
}


export default App
