import React from 'react'
import {Typography} from '@mui/material'
import Form from './components/From/From'


const App = () => {
	return (
		<div className={'App'}>
			<Typography
				variant={'h2'}
				sx={{color: 'primary', fontSize: 'primary'}}>
        F I N A L P R O J E C T
				<Form/>
			</Typography>
		</div>
	)
}

export default App