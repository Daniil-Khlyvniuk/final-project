import React from 'react'
import RelatedItems from './RelatedItems'
import {useSelector} from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'



const RelatedItemsList = () => {

	const items = useSelector(state => state.products.data)

	const card = items.map((item) => (
		<RelatedItems
			key={item.article}
			to='/'
			component={RouterLink}
		/>
	))
	return (
		<div>
			<ul>{card}</ul>
		</div>
	)
}

export default RelatedItemsList