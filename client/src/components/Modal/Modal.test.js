import React from 'react'
import Modal from './Modal'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import userEvent from '@testing-library/user-event'

describe('Test Modal.jsx', () => {
	test('Smoke test Modal', () => {
		render(
			<Provider store={store}>
				<Modal />
			</Provider>
		)
	})

	test('close-button click', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Modal />
			</Provider>
		);

		const button = getByTestId('close-button');
		userEvent.click(button);
	})
})
