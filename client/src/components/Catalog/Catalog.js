import React from 'react'
import {useSelector} from 'react-redux'
import {Box, Typography} from '@mui/material'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { makeStyles, styled } from '@mui/styles'
import {productsSelectors} from '../../store/Products'

import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'

const StyledTypography = styled(Typography)(() => ({
	fontSize: '32px',
	textTransform: 'uppercase',
	fontWeight: 400,
}))

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px',
		margin: '20px auto',
		justifyContent: 'center',
	}
})

const Catalog = () => {
	const products = useSelector(productsSelectors.getProducts())
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const classes = useStyles()

	//preloader
	if(isLoading)
	{
		return <BackdropLoader open={isLoading} />
	}

	

	return (
		<Box className={classes.container}>
			{!products.length && (
				<StyledTypography>no products by filter is found</StyledTypography>
			)}
			{
				!!products
				&& products.map((item) => {
					return (
						<CardInCatalog
							key={item._id}
							_id={item.variants._id}
							image={'/' + item.variants.imageUrls[0]}
							title={item?.name || ''}
							price={item.variants.currentPrice}
						/>
					)
				})
			}
		</Box>
	)
}

export default Catalog