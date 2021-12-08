import React from 'react'
import { render } from '@testing-library/react'
import { matchMedia } from './tests/matchMedia'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './utils/Theme'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path"
  })
}));

describe('Test App.js', () => {
  test('Smoke test App', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
  })
})