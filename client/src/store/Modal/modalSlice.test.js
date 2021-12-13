import reducer, { modalToggle } from './modalSlice'

// eslint-disable-next-line no-undef
describe('Test modalSlice', () => {
	// eslint-disable-next-line no-undef
	test('should return the initial state', () => {
		// eslint-disable-next-line no-undef
		expect(reducer(undefined, {})).toEqual(
			{
				modal: false
			}
		)
	})

	// eslint-disable-next-line no-undef
	test('should change state value to true', () => {
		const previousState = {
			modal: false
		}
		// eslint-disable-next-line no-undef
		expect(reducer(previousState, modalToggle(true))).toEqual(
			{
				modal: true
			}
		)
	})
})
