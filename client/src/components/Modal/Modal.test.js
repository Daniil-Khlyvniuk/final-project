import React from 'react'
import Modal from './Modal'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'

describe('Test Modal.jsx', () => {
	test('Smoke test Modal', () => {
		render(
			<Provider store={store}>
				<Modal />
			</Provider>
		)
	})
})
