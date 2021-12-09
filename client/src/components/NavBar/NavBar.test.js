import React from 'react'
import NavBar from './NavBar'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path"
  })
}))

describe('Test NavBar.jsx', () => {
  test('Smoke test NavBar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
  })

  test('NavBar Logo is rendering', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    getByTestId('navbar-logo')
  })

  test('NavBar Category menu is rendering', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    getByTestId('navbar-category')
  })

  test('NavBar Search input is rendering', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    getByTestId('navbar-search')
  })

  test('NavBar LoginIcon is rendering', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    getByTestId('navbar-login-icon')
  })

  test('NavBar Carticon is rendering', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    getByTestId('navbar-cart-icon')
  })

  test('NavBar Snapshot test', () => {
    const container = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})