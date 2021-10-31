import React from 'react'
import Category from './component/Category/Category'
import NavBar from './components/NavBar/NavBar'
import { Typography } from '@mui/material'

const App = () => {
	return (
		<div className={ 'App' }>
			<Category/>
			<NavBar/>
			<Typography
				variant={ 'h2' }
				sx={ { color: 'primary', fontSize: 'primary' } }
			>
				F I N A L P R O J E C T
			</Typography>
		</div>
	)
}

export default App