import React from 'react'
import LoginForm from './LoginForm'
import { waitFor, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../../../store'
import { BrowserRouter } from 'react-router-dom'

describe('Test LoginForm.js', () => {
	test('Smoke test LoginForm', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginForm />
				</BrowserRouter>
			</Provider>
		)
	})

	test('Rendering and submitting LoginForm', async () => {
		const handleSubmit = jest.fn()

		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginForm onSubmit={handleSubmit} />
				</BrowserRouter>
			</Provider>
		)

		const loginInput = getByTestId('loginOrEmail')
		const passwordInput = getByTestId('password')
		const buttonTest = getByTestId('btn')

		await waitFor(() => {
			userEvent.type(loginInput, 'user')
			userEvent.type(passwordInput, 'password')

			expect(handleSubmit).not.toHaveBeenCalled()

			userEvent.click(buttonTest)

			// expect(handleSubmit).toHaveBeenCalledTimes(1)
		})
	})
})