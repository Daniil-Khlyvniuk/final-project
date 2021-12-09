import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardList from './CardList'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../utils/Theme'

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}))

describe('Test CardList.js', () => {
  test('Smoke test CardList', () => {
    render(
      <ThemeProvider theme={Theme}>
        <CardList />
      </ThemeProvider>
    )
  })

  test('CardList title is rendering', () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <CardList />
      </ThemeProvider>
    )
    getByText('New in')
  })

  test('CardList products container is rendering', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <CardList />
      </ThemeProvider>
    )
    getByTestId('product-container')
  })

  test('CardList Snapshot test', () => {
    const container = render(
      <ThemeProvider theme={Theme}>
        <CardList />
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })
})