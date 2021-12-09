import React from 'react'
import NavBar from './NavBar'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line no-undef
jest.mock('react-router-dom', () => ({
	// eslint-disable-next-line no-undef
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		pathname: 'localhost:3000/example/path'
	})
}))

// eslint-disable-next-line no-undef
describe('Test NavBar.jsx', () => {
	// eslint-disable-next-line no-undef
	test('Smoke test NavBar', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
	})

	// eslint-disable-next-line no-undef
	test('NavBar Logo is rendering', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
		getByTestId('navbar-logo')
	})

	// eslint-disable-next-line no-undef
	test('NavBar Category menu is rendering', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
		getByTestId('navbar-category')
	})

	// eslint-disable-next-line no-undef
	test('NavBar Search input is rendering', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
		getByTestId('navbar-search')
	})

	// eslint-disable-next-line no-undef
	test('NavBar LoginIcon is rendering', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
		getByTestId('navbar-login-icon')
	})

	// eslint-disable-next-line no-undef
	test('NavBar Carticon is rendering', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
		getByTestId('navbar-cart-icon')
	})

	// eslint-disable-next-line no-undef
	test('NavBar Snapshot test', () => {
		const container = render(
			<Provider store={store}>
				<BrowserRouter>
					<NavBar/>
				</BrowserRouter>
			</Provider>
		)
		// eslint-disable-next-line no-undef
		expect(container).toMatchSnapshot()
	})
})