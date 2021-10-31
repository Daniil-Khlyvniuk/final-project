import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Typography } from '@mui/material'


import Footer from './components/Footer'

const App = () => {
	return (
		<div className={ 'App' }>
			<NavBar />
			<Typography
				variant={'h2'}
				sx={{color: 'primary', fontSize:'primary'}}
			>
				F I N A L P R O J E C T
			</Typography>
			<Footer />
		</div>
	)
}

export default App