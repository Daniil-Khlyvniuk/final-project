import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../ProductCard/ProductCard'

import {makeStyles} from '@mui/styles'

import {Typography} from '@mui/material'

import { productsOperations, productsSelectors } from '../../store/Products'


const useStyles = makeStyles((theme)=>({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px', maxWidth: '1180px',
		margin: '0 auto',
		justifyContent: 'center'
	},
	title: theme.typography.sectionHeading,
}))

const CardList = () => {
	const products = useSelector(productsSelectors.getProducts())
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(productsOperations.fetchProducts())
	}, [dispatch])

	return (
		<div>
			<Typography fontSize={32}
				sx={{mb:'14px', mt:'85px'}}
				variant={'h2'} className={classes.title}>NEW IN</Typography>
			<div className={classes.container}>
				{
					!!products?.list
					&& products?.list?.map((item, key) => (
						<Card
							key={key}
							image={item.img}
							title={item.title}
							price={item.price} />
					))
				}
			</div>
		</div>
	)
}

export default CardList