import React from 'react'
// import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'
// import Footer from './components/Footer'
import Form from './components/Form/Form'

const App = () => {
	return (
		<div className={ 'App' }>
			{/*<NavBar/>*/}
			<Form/>
			<AppRoutes />
			{/*<Footer />*/}
		</div>
	)
}


export default App