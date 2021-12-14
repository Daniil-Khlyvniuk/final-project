import reducer, { setAllProducts, addRelatedId } from './productsSlice'

describe('Test productsSlice', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(
			{
				data: [],
				catalog: [],
				relatedArray: (localStorage.getItem('related') && JSON.parse(localStorage.getItem('related'))) || [],
				relatedProductsList: [],
				isLoading: true,
				error: null,
			}
		)
	})

	test('should add products to state data', () => {
		const previousState = {
			data: [],
			isLoading: true
		}
		expect(reducer(previousState,
			setAllProducts(
				[
					{ variants: { enabled: true, color: 'blue', quantity: 20 }, id: 1, name: 'product1' },
					{ variants: { enabled: true, color: 'red', quantity: 10 }, id: 2, name: 'product2' }
				],
				false
			)
		)).toEqual(
			{
				data: [
					{ variants: { enabled: true, color: 'blue', quantity: 20 }, id: 1, name: 'product1' },
					{ variants: { enabled: true, color: 'red', quantity: 10 }, id: 2, name: 'product2' }
				],
				isLoading: false
			}
		)
	})

	test('should not add related products id to state if id do not match', () => {
		const previousState = {
			relatedArray: (localStorage.getItem('related') && JSON.parse(localStorage.getItem('related'))) || []
		}
		expect(reducer(previousState,addRelatedId([]))).toEqual(
			{
				relatedArray: [[]]
			}
		)
	})
})