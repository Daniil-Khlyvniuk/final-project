import React from 'react'
import LoginForm from './LoginForm'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../../store'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Smoke test LoginFrom', () => {
	const setUp = () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginForm/>
				</BrowserRouter>
			</Provider>
		)
	}

	let container
	beforeEach(() => {
		container = setUp()
	})
	it('should render LoginForm', () => {
		expect(container)
	})
	it('LoginForm Snapshot test', () => {
		expect(container).toMatchSnapshot()
	})
})

describe("Testing formik on LoginForm", () => {
	it('should rendering and submitting a basic Formik form',  () => {
		const handleSubmit = jest.fn()

		render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginForm/>
				</BrowserRouter>
			</Provider>
		)

		userEvent.type(screen.getByLabelText(/Login or Emai/i), 'john.dee@someemail.com')
		userEvent.type(screen.getByLabelText(/Password/i), 'qwerty1234')

		userEvent.click(screen.getByTestId('button', {type: /submit/i}))

		 waitFor(() =>
			expect(handleSubmit).toHaveBeenCalledWith({
				email: 'john.dee@someemail.com',
				password: 'qwerty1234',
			}),
		)
	})
})