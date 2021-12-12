import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../store'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SignInForm from './SignInForm'

describe('Smoke test SignInForm', () => {
	const setUp = () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignInForm />
				</BrowserRouter>
			</Provider>
		)
	}

	let container
	beforeEach(() => {
		container = setUp()
	})
	it('should render SignInForm', () => {
		expect(container)
	})
	it('SignInForm Snapshot test', () => {
		expect(container).toMatchSnapshot()
	})
})

describe("Testing formik on SignInForm", () => {
	it('should rendering and submitting a basic Formik form', () => {
		const handleSubmit = jest.fn()
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SignInForm />
				</BrowserRouter>
			</Provider>
		)

		userEvent.type(screen.getByTestId('firstName'), 'Gogi')
		userEvent.type(screen.getByTestId('lastName'), 'GogiSurname')
		userEvent.type(screen.getByTestId('login'), 'nickname')
		userEvent.type(screen.getByTestId('email'), 'gogi123@gmail.com')
		userEvent.type(screen.getByTestId('password'), 'qwerty12345')
		userEvent.type(screen.getByTestId('confirmPass'), 'qwerty12345')

		userEvent.click(screen.getByTestId('submit', { type: /submit/i }))

		waitFor(() =>
			expect(handleSubmit).toHaveBeenCalledWith({
				firstname: 'Gogi',
				lastname: 'GogiSurname',
				login: 'nickname',
				email: 'gogi123@gmail.com',
				password: 'qwerty12345',
				confirmPass: 'qwerty12345'
			}),
		)
	})
})