import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux'
import {configureStore} from './store'
import App from './App'
import {ThemeProvider} from '@mui/material/styles'
import Theme from './utils/Theme'

const store = configureStore()


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={Theme}>
				<App/>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
	,
	document.getElementById('root')
)
