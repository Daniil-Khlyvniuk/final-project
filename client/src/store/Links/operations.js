import { createAsyncThunk } from '@reduxjs/toolkit'
import linksApi from '../../utils/API/linksApi'

const fetchLinks = createAsyncThunk(
	'links/fetchLinks',
	async () => {
		const response = await linksApi.getLinks()
		return response.data
	}
)

export default {fetchLinks}