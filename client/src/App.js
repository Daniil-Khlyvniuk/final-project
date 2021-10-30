import React from 'react'
import {Typography} from '@mui/material'
import AppRoutes from './components/routes/AppRoutes'


const App = () => {
	return (
		<div className={'App'}>
			<Typography
				variant={'h2'}
				sx={{color: 'primary', fontSize: 'primary'}}>
        F I N A L P R O J E C T
				<AppRoutes/>
			</Typography>
		</div>
	)
}

export default App