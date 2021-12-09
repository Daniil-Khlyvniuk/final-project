import React from 'react'
// import { render } from '@testing-library/react'
// import StaticPages from './StaticPages'
import axios from 'axios'
import { render } from '@testing-library/react'
import StaticPages from './StaticPages'

// eslint-disable-next-line require-await
const mockFetchData =  async page => {
	const url = `/api/pages/${page}`
	return await axios.get(url)
}
const setUp = (props) => {
	return render(<StaticPages {...props}/>)
}

// eslint-disable-next-line no-undef
describe('Testing static pages', () => {
	// eslint-disable-next-line no-unused-vars
	let container
	// eslint-disable-next-line no-undef
	beforeEach((props)=>{
		container = setUp(props)
	})
	// eslint-disable-next-line no-undef
	describe('Smoke testing StaticPages', () => {
		// eslint-disable-next-line no-undef
		it('render component ',  () => {

		})
	})

	// eslint-disable-next-line no-undef
	describe('testing axios on StaticPages', () => {
		// eslint-disable-next-line no-undef
		it('good response',  async () => {
			const data = {}
			// eslint-disable-next-line no-undef
			jest.spyOn(axios, 'get').mockResolvedValue({})
			// eslint-disable-next-line no-undef
			await  expect(mockFetchData('careers')).toMatchObject(data)
		})
		// eslint-disable-next-line no-undef,require-await
		it('bad response', async ()=>{
			axios.get.mockImplementation(()=> Promise.reject({}))
		})
	})

})