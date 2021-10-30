import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './utils/Theme'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
