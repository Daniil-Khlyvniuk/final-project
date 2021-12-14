import reducer, { modalToggle } from './modalSlice'

describe('Test modalSlice', () => {
	test('should return the initial state', () => {
		// eslint-disable-next-line no-undef
		expect(reducer(undefined, {})).toEqual(
			{
				modal: false
			}
		)
	})

	test('should change state value to true', () => {
		const previousState = {
			modal: false
		}
		expect(reducer(previousState, modalToggle(true))).toEqual(
			{
				modal: true
			}
		)
	})
})
