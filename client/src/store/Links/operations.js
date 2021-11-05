import { createAsyncThunk } from '@reduxjs/toolkit'
import linksApi from '../../utils/API/linksApi'

const fetchLinks = createAsyncThunk(
	'users/fetchByIdStatus',
	async () => {
		const response = await linksApi.getLinks()
		return response.data
	}
)

export default {fetchLinks}