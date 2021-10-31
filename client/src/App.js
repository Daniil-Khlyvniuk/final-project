import React from 'react'
import { Typography } from '@mui/material'
import AppRoutes from './components/routes/AppRoutes'
import Form from './components/Form/Form'

const App = () => {
	return (
		<div className={'App'}>
			<Typography
				variant={'h2'}
				sx={{ color: 'primary', fontSize: 'primary' }}>
				<div>
					<Form/>
					<AppRoutes/>
				</div>
			</Typography>
		</div>
	)
}

export default App