import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './utils/Theme'
import {Provider} from 'react-redux'
import store from './store/index'

ReactDOM.render(
	<ThemeProvider theme={ Theme }>
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
