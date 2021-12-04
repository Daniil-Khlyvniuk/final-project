import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './utils/Theme'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<ErrorBoundary>
						<HelmetProvider>
							<App />
						</HelmetProvider>
					</ErrorBoundary>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)