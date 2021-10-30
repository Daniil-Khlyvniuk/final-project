import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './utils/Theme'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.StrictMode>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
