import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ThemeProvider} from '@mui/material/styles'
import Theme from './utils/Theme'

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
