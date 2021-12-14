import {createAsyncThunk} from '@reduxjs/toolkit'
import { getSlide } from '../../utils/API/sliderAPI'

const fetchSliders = createAsyncThunk(
	'slides/fetchSliders',
	async () =>{
		const res = await getSlide()
		return res.data
	})

export default { fetchSliders }
