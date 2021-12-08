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

  // test('it should render products', () => {
  //   useSelector.mockImplementation(cb =>
  //     cb({
  //       data: ['Product1', 'Product2']
  //     })
  //   )

  //   const { getByTestId, getByText } = render(<CardList />)
  //   const productsContainer = getByTestId('product-container')

  //   expect(productsContainer).toContainElement(getByText('Product1'))
  //   expect(productsContainer).toContainElement(getByText('Product2'))
  // })
})