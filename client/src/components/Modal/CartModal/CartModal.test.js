import React from 'react'
import CartModal from './CartModal'
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
describe('Test CartModal.js', () => {
	// eslint-disable-next-line no-undef
	test('Smoke test CartModal', () => {
		render(
			<BrowserRouter>
				<CartModal />
			</BrowserRouter>
		)
	})

	// eslint-disable-next-line no-undef
	test('CartModal content is rendering', () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<CartModal />
			</BrowserRouter>
		)
		getByTestId('cart-modal-content')
	})
})
