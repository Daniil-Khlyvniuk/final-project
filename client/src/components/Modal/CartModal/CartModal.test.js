import React from 'react'
import CartModal from './CartModal'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch
}))

describe('Test CartModal.js', () => {
	test('Smoke test CartModal', () => {
		render(
			<BrowserRouter>
				<CartModal />
			</BrowserRouter>
		)
	})

	test('CartModal content is rendering', () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<CartModal />
			</BrowserRouter>
		)
		getByTestId('cart-modal-content')
	})
})
