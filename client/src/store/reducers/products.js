import * as PRODUCTS from '../constants/products'

const initialState = {
  data: [],
  isLoading: true,
  error: null
}

export default function allProducts (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS.GET_ALL: {
      return {
        ...state,
        data: action.data,
        isLoading: false
      }
    }
    default:return state
  }
}
