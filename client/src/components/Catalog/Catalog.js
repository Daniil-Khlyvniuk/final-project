import React from 'react'
import {useSelector} from 'react-redux'
import {Box, Typography} from '@mui/material'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { makeStyles, styled } from '@mui/styles'
import {productsSelectors} from '../../store/Products'
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
	alignSelf: 'center',
}))

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		// alignItems: 'center',
		// flexWrap: 'wrap',
		// gap: '20px',
		// margin: '20px auto',
		// justifyContent: 'center',
	}
})

const Catalog = () => {
	const products = useSelector(productsSelectors.getCatalog())
	const {handleInfinitiScroll} = useFilterHandler()
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const hasMore = useSelector(filterSelectors.getInfinityScrollHasMore())
	const classes = useStyles()

	const {startPage} = useSelector(filterSelectors.getFilters())

	const handleScroll = () => {
		// eslint-disable-next-line no-console
		// console.log('startPage: ', startPage)
		handleInfinitiScroll('startPage', +startPage + 1)
	}


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
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					flexWrap: 'wrap',
					overflow: 'visible',
				}}
				dataLength={products.length}
				next={handleScroll}
				hasMore={hasMore}
				loader={products.length ? <Loader /> : null}
				// endMessage={
				// 	<StyledTypography>{'that\'s all, folks!'}</StyledTypography>
				// }
			>
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
