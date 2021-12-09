import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../utils/Theme'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const _id = ''
const title = ''
const image = ''
const price = 111

// eslint-disable-next-line no-undef
const mockDispatch = jest.fn()
// eslint-disable-next-line no-undef
jest.mock('react-redux', () => ({
	// eslint-disable-next-line no-undef
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

// eslint-disable-next-line no-undef
describe('Test ProductCard.js', () => {
	// eslint-disable-next-line no-undef
	test('Smoke test ProductCard', () => {
		render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<ProductCard
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
	})

	// eslint-disable-next-line no-undef
	test('ProductCard favorite icon is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<ProductCard
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('favorite-button-product-card')
	})

	// eslint-disable-next-line no-undef
	test('ProductCard favorite icon click', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<ProductCard
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)

		const favoriteButtonProductCard = getByTestId('favorite-button-product-card')
		userEvent.click(favoriteButtonProductCard)
	})

	// eslint-disable-next-line no-undef
	test('ProductCard image is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<ProductCard
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('image-product-card')
	})

	// eslint-disable-next-line no-undef
	test('ProductCard title is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<ProductCard
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('title-product-card')
	})

	// eslint-disable-next-line no-undef
	test('ProductCard price is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<ProductCard
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('price-product-card')
	})
})