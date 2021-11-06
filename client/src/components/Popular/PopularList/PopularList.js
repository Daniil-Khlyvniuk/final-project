import React, {useEffect, useState} from 'react'
import PopularCard from '../PopularCard/PopularCard'
import {Grid} from '@mui/material'

const PopularList = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('/popular.json')
			.then(res=>res.json()).then(items => setData(items) )
	} , [])

	return (
		<Grid container spacing={2}>
			{data.map(item => <PopularCard key={item.title} data={item} /> )}
		</Grid>
	)
}

export default PopularList