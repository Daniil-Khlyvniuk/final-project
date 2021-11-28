/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Box, Typography} from '@mui/material'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { makeStyles, styled } from '@mui/styles'
import {productsSelectors} from '../../store/Products'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'
import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'
import InfiniteScroll from 'react-infinite-scroll-component'

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
	const products = useSelector(productsSelectors.getCatalog())
	const [handleFilterChange] = useFilterHandler()
	const [nextPage, setNextPage] = useState(1)
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const classes = useStyles()


	// useEffect(() => {
	// 	handleFilterChange('startPage', nextPage)
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [nextPage])

	// eslint-disable-next-line no-console
	console.log('products: ', products)

	// eslint-disable-next-line no-console
	console.log('next page: ', nextPage)
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
			<InfiniteScroll
				dataLength={products.length}
				next={() => {
					setNextPage(nextPage < 10 ? nextPage + 1 : nextPage)
				}}
				// scrollThreshold={'10'}
				hasMore={true}
				loader={null}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>That`s all, folks!</b>
					</p>}>
				{
					!!products
				&& products.map((item, index) => {
					return (
						<CardInCatalog
							key={index} //костыль
							_id={item.variants._id}
							image={'/' + item.variants.imageUrls[0]}
							title={item?.name || ''}
							price={item.variants.currentPrice}
						/>
					)
				})
				}
			</InfiniteScroll>
		</Box>
	)
}

export default Catalog
