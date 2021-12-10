import React from 'react'
import Footer from './index'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'

describe('Test Footer component', () => {
	test('Smoke test Footer', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Footer />
				</BrowserRouter>
			</Provider>
		)
	})

	test('Footer Snapshot test', () => {
		const container = render(
			<Provider store={store}>
				<BrowserRouter>
					<Footer />
				</BrowserRouter>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
})