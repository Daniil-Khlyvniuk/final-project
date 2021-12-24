import reducer, { setFavorites, setLoading } from './favoritesSlice'

describe('Test favoritesSlice', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(
			{
				data: [],
				id: [],
				isLoading: false,
			}
		)
	})

	test('should add favorite product id to state data', () => {
		const previousState = {
			data: []
		}
		expect(reducer(previousState, setFavorites(
			[{ id: 1 }, { id: 2 }, { id: 3 }])))
			.toEqual(
				{
					data: [{ id: 1 }, { id: 2 }, { id: 3 }]
				}
			)
	})

	test('should change state isLoading value to true', () => {
		const previousState = {
			isLoading: false
		}
		expect(reducer(previousState, setLoading(true))).toEqual(
			{
				isLoading: true
			}
		)
	})
})