/* eslint-disable no-undef */
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import CardInCatalog from './CardInCatalog'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../utils/Theme'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const _id = ''
const title = ''
const image = ''
const price = 111

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

describe('Test CardInCatalog.js', () => {
	test('Smoke test CardInCatalog', () => {
		render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
	})

	test('CardInCatalog image is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('image-catalog-card')
	})

	test('CardInCatalog title is rendering (main)', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('title-catalog-card-main')
	})

	test('CardInCatalog price is rendering (main)', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('price-catalog-card-main')
	})

	test('CardInCatalog favorite icon is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('favorite-button-catalog-card')
	})

	test('CardInCatalog favorite icon click', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)

		const favoriteButtonCatalogCard = getByTestId('favorite-button-catalog-card')
		userEvent.click(favoriteButtonCatalogCard)
	})

	test('CardInCatalog title is rendering (hover)', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('title-catalog-card-hover')
	})

	test('CardInCatalog price is rendering (hover)', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<BrowserRouter>
					<CardInCatalog
						_id={_id}
						image={image}
						title={title}
						price={price}
					/>
				</BrowserRouter>
			</ThemeProvider>
		)
		getByTestId('price-catalog-card-hover')
	})
})