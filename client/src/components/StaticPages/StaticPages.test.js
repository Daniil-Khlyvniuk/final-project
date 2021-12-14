import React from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'
import StaticPages from './StaticPages'
import store from '../../store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const mockFetchData =  async page => {
	const url = `/api/pages/${page}`
	return await axios.get(url)
}

const setUp = () => {
	return render(
		<Provider store={store}>
			<BrowserRouter>
				<StaticPages />
			</BrowserRouter>
		</Provider>

	)
}

describe('Testing static pages', () => {

	let container

	beforeEach(()=>{
		container = setUp()
	})

	describe('Smoke testing StaticPages', () => {

		it('render component ',  () => {
				expect(container)
		})
	})


	describe('testing axios on StaticPages', () => {

		it('good response',  async () => {
			const data = {}
			jest.spyOn(axios, 'get').mockResolvedValue({})
			await  expect(mockFetchData('careers')).toMatchObject(data)
		})
		it('bad response', async ()=>{
			axios.get.mockImplementation(()=> Promise.reject({}))
		})
	})

})