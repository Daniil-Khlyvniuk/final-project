import React from 'react'
import { render } from '@testing-library/react'
import { matchMedia } from './test'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));

describe('Test App.js', () => {
  test('Smoke test App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})