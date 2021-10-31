import React from 'react'
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './AppRoutes/AppRoutes'


const App = () => {
	return (
		<div className={ 'App' }>
			<NavBar />
			<AppRoutes />
		</div>
	)
}

export default App