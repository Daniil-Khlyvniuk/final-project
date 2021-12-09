import React from 'react'
import LoginModal from './LoginModal'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line no-undef
const mockDispatch = jest.fn()
// eslint-disable-next-line no-undef
jest.mock('react-redux', () => ({
	// eslint-disable-next-line no-undef
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

// eslint-disable-next-line no-undef
describe('Test LoginModal.js', () => {
	// eslint-disable-next-line no-undef
	it('Smoke test LoginModal', () => {
		render(
			<BrowserRouter>
				<LoginModal />
			</BrowserRouter>
		)
	})

	// eslint-disable-next-line no-undef
	test('LoginModal content is rendering', () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<LoginModal />
			</BrowserRouter>
		)
		getByTestId('login-form')
	})
})
