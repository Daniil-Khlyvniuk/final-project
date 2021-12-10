import reducer, { actions } from './userSlice'

describe('Test userSlice', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(
			{
				token: localStorage.getItem('userToken') || null,
				data: null,
				error: null,
				isLoading: false,
				unregistered: null
			}
		)
	})

	test('should register/login user', () => {
		const previousState = {
			data: null
		}
		expect(reducer(previousState, actions.setNewData(
			{
				firstName: 'user',
				lastName: 'user',
				email: 'user@com.ua',
				phone: '0509999977',
				address: 'User str',
				city: 'User city',
				country: 'User country',
				subscribe: true
			}
		))).toEqual(
			{
				data: {
					firstName: 'user',
					lastName: 'user',
					email: 'user@com.ua',
					phone: '0509999977',
					address: 'User str',
					city: 'User city',
					country: 'User country',
					subscribe: true
				}
			}
		)
	})

	test('should set user token to store', () => {
		const previousState = {
			token: localStorage.getItem('userToken') || null
		}
		expect(reducer(previousState, actions.setToken({ token: '123' })))
			.toEqual(
				{
					token: '123'
				}
			)
	})

	test('should logout user', () => {
		const previousState = {
			token: '123',
			data: {
				firstName: 'user',
				lastName: 'user',
				email: 'user@com.ua',
				phone: '0509999977',
				address: 'User str',
				city: 'User city',
				country: 'User country',
				subscribe: true
			}
		}
		expect(reducer(previousState, actions.logOut()))
			.toEqual(
				{
					token: null,
					data: null
				}
			)
	})
})