import React from 'react'
import Header from './components/NavBar/NavBar'
import Footer from './components/Footer'

import AppRoutes from './routes/AppRoutes'



const App = () => {
	// // it is an example of dispatching actions
	// const dispatch = useDispatch()
	// dispatch(cardActions.test())
	// dispatch(cardActions.test2('it works'))
	// //========================================

	return (

		<div className={'App'}>
			<Header />
			<AppRoutes />

			<Footer />
		</div>
	)
}

export default App
