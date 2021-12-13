import React from 'react'
import SubscribeForm from './index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Smoke test SubscribeForm', () => {
	const setUp = () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SubscribeForm />
				</BrowserRouter>
			</Provider>
		)
	}

	let container
	beforeEach(() => {
		container = setUp()
	})
	it('should render SubscribeForm', () => {
		expect(container)
	})
	it('SubscribeForm Snapshot test', () => {
		expect(container).toMatchSnapshot()
	})
})

describe("Testing formik on SubscribeForm", () => {
	it('should rendering and submitting a basic Formik form', () => {
		const handleSubmit = jest.fn()

		render(
			<Provider store={store}>
				<BrowserRouter>
					<SubscribeForm />
				</BrowserRouter>
			</Provider>
		)

		userEvent.type(screen.getByTestId('email'), 'john.dee@someemail.com')

		userEvent.click(screen.getByTestId('button', { type: /submit/i }))

		waitFor(() =>
			expect(handleSubmit).toHaveBeenCalledWith({
				email: 'john.dee@someemail.com',
			}),
		)
	})
})