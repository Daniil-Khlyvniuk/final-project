import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../../../store'
import LoginForm from './LoginForm'

jest.mock('react-router-dom', () => ({ Link: 'a' }))

describe('Test LoginForm.js', () => {
	test('Rendering and submitting LoginForm', async () => {
		const handleSubmit = jest.fn()
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)

		userEvent.type(screen.getByLabelText(/login or email/i), 'John')
		userEvent.type(screen.getByLabelText(/password/i), '1234567')

		userEvent.click(screen.getByRole('button', { name: /log in/i }))

		await waitFor(() =>
			expect(handleSubmit).toHaveBeenCalledWith({
				loginOrEmail: 'John',
				password: '1234567',
			}),
		)
	})
})