import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../store'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import UserForm from './UserForm'

describe('Smoke test UserForm', () => {
	const setUp = () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<UserForm />
				</BrowserRouter>
			</Provider>
		)
	}

	let container
	beforeEach(() => {
		container = setUp()
	})
	it('should render UserForm', () => {
		expect(container)
	})
	it('UserForm Snapshot test', () => {
		expect(container).toMatchSnapshot()
	})
})