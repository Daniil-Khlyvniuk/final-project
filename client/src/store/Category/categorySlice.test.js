import reducer, { setCategoryTree } from './categorySlice'

describe('Test categorySlice', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(
			{
				categoryTree: [],
				error: null,
				isLoading: true,
			}
		)
	})

	test('should set categoryTree', () => {
		const previousState = {
			categoryTree: []
		}
		expect(reducer(previousState,
			setCategoryTree([{ id: 1, name: '111', imgUrl: '111' }, { id: 2, name: '222', imgUrl: '222' }])))
			.toEqual(
				{
					categoryTree: [{ id: 1, name: '111', imgUrl: '111' }, { id: 2, name: '222', imgUrl: '222' }]
				}
			)
	})
})