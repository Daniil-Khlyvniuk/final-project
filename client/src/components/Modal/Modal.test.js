import React from 'react'
import Modal from './Modal'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line no-undef
describe('Test Modal.jsx', () => {
	// eslint-disable-next-line no-undef
	test('Smoke test Modal', () => {
		render(
			<Provider store={store}>
				<Modal />
			</Provider>
		)
	})

	// eslint-disable-next-line no-undef
	test('close-button click', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Modal />
			</Provider>
		)

		const button = getByTestId('close-button')
		userEvent.click(button)
	})
})
