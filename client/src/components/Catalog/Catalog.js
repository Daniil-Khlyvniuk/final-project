import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Grid, Typography } from '@mui/material'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { styled } from '@mui/styles'
import { productsSelectors } from '../../store/Products'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'
import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'
import Loader from '../UI/Loader/Loader'
import InfiniteScroll from 'react-infinite-scroll-component'
import { filterSelectors } from '../../store/Filter'


const StyledTypography = styled(Typography)(() => ({
	fontSize: '32px',
	textTransform: 'uppercase',
	fontWeight: 400,
	margin: 'auto',
	alignSelf: 'center'
}))

const Catalog = () => {
	const products = useSelector(productsSelectors.getCatalog())
	const { handleInfinitiScroll } = useFilterHandler()
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const hasMore = useSelector(filterSelectors.getInfinityScrollHasMore())
	const { startPage } = useSelector(filterSelectors.getFilters())
	const productsCards = products?.map(item => (
		<Grid item l={ 4 } md={ 6 } sm={ 6 } xs={ 12 }
			key={ item.variants._id }>
			<CardInCatalog
				_id={ item.variants._id }
				parentId={ item._id }
				sx={ { width: { sm: '280px' }, height: { sm: '280px' } } }
				image={ '/' + item.variants.imageUrls[0] }
				title={ item.name }
				price={ item.variants.currentPrice }
				color={ item.variants.color }
			/>
		</Grid>
	))

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	const handleScroll = () => {
		handleInfinitiScroll('startPage', +startPage + 1)
	}

	if (isLoading) {
		return <BackdropLoader open={ isLoading } />
	}

	return (
		<Box
			sx={ {
				display: 'flex',
				flexDirection: 'column',
				minWidth: 320
			} }
		>
			{ !products.length && (
				<StyledTypography>no products by filter is found</StyledTypography>
			) }
			<InfiniteScroll
				style={ {
					display: 'flex',
					justifyContent: 'flex-start',
					gap: '10px',
					alignItems: 'center',
					flexWrap: 'wrap',
					overflow: 'visible',
					margin: '15px 0 0 0'
				} }
				dataLength={ products.length }
				next={ handleScroll }
				hasMore={ hasMore }
				loader={ products.length ? <Loader /> : null }
			>
				<Grid container spacing={ 2 } sx={ { marginBottom: '40px' } }>
					{
						productsCards
					}
				</Grid>
			</InfiniteScroll>
		</Box>
	)
}

export default Catalog