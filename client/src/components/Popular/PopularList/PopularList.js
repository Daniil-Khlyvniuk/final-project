import React from 'react'
import PopularCard from '../PopularCard/PopularCard'
import {Grid} from '@mui/material'
import useCategoryTree from '../../../utils/customHooks/useCategoryTree'


const PopularList = () => {
	const categories = useCategoryTree()

	return (
		<Grid container spacing={2}>
			{
				categories.map((category , index) => {
					return <PopularCard
						key={category._id}
						data={category} index={index}/>
				})
			}
		</Grid>
	)
}

export default PopularList