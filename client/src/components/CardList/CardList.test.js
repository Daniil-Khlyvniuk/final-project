import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import CardList from './CardList'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../utils/Theme'


// eslint-disable-next-line no-undef
const mockDispatch = jest.fn()
// eslint-disable-next-line no-undef
jest.mock('react-redux', () => ({
	// eslint-disable-next-line no-undef
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

// eslint-disable-next-line no-undef
describe('Test CardList.js', () => {
	// eslint-disable-next-line no-undef
	test('Smoke test CardList', () => {
		render(
			<ThemeProvider theme={Theme}>
				<CardList />
			</ThemeProvider>
		)
	})

	// eslint-disable-next-line no-undef
	test('CardList title is rendering', () => {
		const { getByText } = render(
			<ThemeProvider theme={Theme}>
				<CardList />
			</ThemeProvider>
		)
		getByText('New in')
	})

	// eslint-disable-next-line no-undef
	test('CardList products container is rendering', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={Theme}>
				<CardList />
			</ThemeProvider>
		)
		getByTestId('product-container')
	})

	// eslint-disable-next-line no-undef
	test('CardList Snapshot test', () => {
		const container = render(
			<ThemeProvider theme={Theme}>
				<CardList />
			</ThemeProvider>
		)
		// eslint-disable-next-line no-undef
		expect(container).toMatchSnapshot()
	})
})