import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../../utils/Theme'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const _id = ''
const title = ''
const image = ''
const price = 111

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}))

describe('Test ProductCard.js', () => {
  test('Smoke test ProductCard', () => {
    render(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ProductCard
            _id={_id}
            image={image}
            title={title}
            price={price}
          />
        </BrowserRouter>
      </ThemeProvider>
    )
  })

  test('ProductCard favorite icon is rendering', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ProductCard
            _id={_id}
            image={image}
            title={title}
            price={price}
          />
        </BrowserRouter>
      </ThemeProvider>
    )
    getByTestId('favorite-button-product-card')
  })

  test('ProductCard favorite icon click', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ProductCard
            _id={_id}
            image={image}
            title={title}
            price={price}
          />
        </BrowserRouter>
      </ThemeProvider>
    )

    const favoriteButtonProductCard = getByTestId('favorite-button-product-card')
    userEvent.click(favoriteButtonProductCard)
  })

  test('ProductCard image is rendering', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ProductCard
            _id={_id}
            image={image}
            title={title}
            price={price}
          />
        </BrowserRouter>
      </ThemeProvider>
    )
    getByTestId('image-product-card')
  })

  test('ProductCard title is rendering', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ProductCard
            _id={_id}
            image={image}
            title={title}
            price={price}
          />
        </BrowserRouter>
      </ThemeProvider>
    )
    getByTestId('title-product-card')
  })

  test('ProductCard price is rendering', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ProductCard
            _id={_id}
            image={image}
            title={title}
            price={price}
          />
        </BrowserRouter>
      </ThemeProvider>
    )
    getByTestId('price-product-card')
  })
})