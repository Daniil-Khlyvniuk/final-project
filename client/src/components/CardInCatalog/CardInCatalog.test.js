import React from 'react'
import CardInCatalog from './CardInCatalog'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../utils/Theme'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import jest from '@testing-library/jest-dom'

const _id = ''
const title = ''
const image = ''
const price = 111

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

// eslint-disable-next-line no-undef
describe('Test CardInCatalog.js', () => {
	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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