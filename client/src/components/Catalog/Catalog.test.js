import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import Catalog from './Catalog'
import * as redux from 'react-redux';


describe('Smoke test render Catalog', () => {
	it('should render Catalog', () => {
		const container =
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Catalog/>
					</BrowserRouter>
				</Provider>
			)

		expect(container)
	})
	it('snapshot test Catalog', function () {
		const container =
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Catalog/>
					</BrowserRouter>
				</Provider>
			)

		expect(container).toMatchSnapshot()
	})

})

