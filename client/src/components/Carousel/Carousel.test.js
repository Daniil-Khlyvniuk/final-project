import React from 'react'
import Carousel from './Carousel'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'

const slides = []
const main = true
const product = true
const related = true
const setUp = (props) => render(<Carousel {...props}/>)

// eslint-disable-next-line no-undef
describe('Test Carousel component', () => {
	// eslint-disable-next-line no-undef
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
	// eslint-disable-next-line no-undef
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
		// eslint-disable-next-line no-undef
		expect(container).toMatchSnapshot()
	})
})
// eslint-disable-next-line no-undef
describe('Test props on Carousel', ()=>{
	let component
	// eslint-disable-next-line no-undef
	it('should render Carousel on related with props',  () => {
		let mockProps = {
			main: false,
			slides: {},
			related: true,
			product: false
		}
		component = setUp(mockProps)
		component.toMatchSnapshot()
	})
	// eslint-disable-next-line no-undef
	it('should render Carousel on related without props',  () => {
		let mockProps = {
			main: false,
			slides: {},
			related: false,
			product: false
		}
		component = setUp(mockProps)
		component.toMatchSnapshot()
	})
})

