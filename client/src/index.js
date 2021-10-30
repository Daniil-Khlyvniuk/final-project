import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './utils/Theme'

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.StrictMode>
			<BrowserRouter>
				<ErrorBoundary>
			    <App />
		    </ErrorBoundary>
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
