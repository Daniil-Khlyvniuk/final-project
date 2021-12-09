import React from 'react'
// eslint-disable-next-line no-unused-vars
import { matchMedia } from '../../tests/matchMedia'
import Carousel from './Carousel'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'

const slides = []
const main = true
const product = true
const related = true

describe('Test Carousel component', () => {
	test('Smoke test Carousel', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Carousel
						slides={slides}
						main={main}
						product={product}
						related={related}
					/>
				</BrowserRouter>
			</Provider>
		)
	})

	test('Carousel Snapshot test', () => {
		const container = render(
			<Provider store={store}>
				<BrowserRouter>
					<Carousel
						slides={slides}
						main={main}
						product={product}
						related={related}
					/>
				</BrowserRouter>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
})