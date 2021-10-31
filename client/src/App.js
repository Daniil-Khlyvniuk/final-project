import React from 'react'
import Category from './component/Category/Category'
import NavBar from './components/NavBar/NavBar'
import { Typography } from '@mui/material'
import AppRoutes from './AppRoutes/AppRoutes'
import Footer from './components/Footer'

const App = () => {
	return (
		<div className={ 'App' }>
			<NavBar/>
			<Category/>
			<Typography
				variant={ 'h2' }
				sx={ { color: 'primary', fontSize: 'primary' } }
			>
				F I N A L P R O J E C T
			</Typography>
			<AppRoutes />
			<Footer />
		</div>
	)
}

export default App