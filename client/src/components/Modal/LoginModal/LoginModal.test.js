/* eslint-disable no-undef */
import React from 'react'
import LoginModal from './LoginModal'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

describe('Test LoginModal.js', () => {
	test('Smoke test LoginModal', () => {
		render(
			<BrowserRouter>
				<LoginModal />
			</BrowserRouter>
		)
	})

	test('LoginModal content is rendering', () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<LoginModal />
			</BrowserRouter>
		)
		getByTestId('login-form')
	})
})
