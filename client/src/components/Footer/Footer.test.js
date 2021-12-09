import React from 'react'
import Footer from './index'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line no-undef
describe('Test Footer component', () => {
	// eslint-disable-next-line no-undef
	test('Smoke test Footer', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Footer/>
				</BrowserRouter>
			</Provider>
		)
	})

	// eslint-disable-next-line no-undef
	test('Footer Snapshot test', () => {
		const container = render(
			<Provider store={store}>
				<BrowserRouter>
					<Footer/>
				</BrowserRouter>
			</Provider>
		)
		// eslint-disable-next-line no-undef
		expect(container).toMatchSnapshot()
	})
})