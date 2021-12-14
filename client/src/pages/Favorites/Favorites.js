import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import { favoritesOperations, favoritesSelectors } from '../../store/Favorites'
import UseSeo from '../../utils/customHooks/useSeo'
import FavoritesTitle from './FavoritesElems/FavoritesTitle'


const Favorites = () => {
	const favorites = useSelector(favoritesSelectors.getFavorites())
	const isLoading = useSelector(favoritesSelectors.isLoading())
	const dispatch = useDispatch()
	const favoriteID = JSON.parse(localStorage.getItem('favorites')) || []
	const favoritesCards = favorites?.map(item => (
		<Grid item md={ 6 } sm={ 6 } xs={ 12 } key={ item.variants._id }>
			<ProductCard
				_id={ item.variants._id }
				sx={ { width: { sm: '580px' }, height: { sm: '545px' } } }
				image={ '/' + item.variants.imageUrls[0] }
				title={ item.name }
				price={ item.variants.currentPrice }
			/>
		</Grid>
	))
	const SeoWords = favorites ? favorites.map(
		favorite => `${ favorite.name }, ${ favorite.manufacturer }, 
						${ favorite.brand }, ${ favorite.seller }, 
						${ favorite.manufacturerCountry }`)
		.join(', ')
		: null


	useEffect(() => {
		favoritesOperations.fetchFavorites(favoriteID)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ favoriteID.length ])

	return (
		<>
			<UseSeo
				title={ 'Product Favorites' }
				description={ 'Product favorites user liked' }
				keywords={ SeoWords }
			/>
			<Container maxWidth="lg" sx={ { minWidth: 320 } }>
				{
					isLoading
					&&
					<BackdropLoader open={ isLoading } />

				}
				<FavoritesTitle isEmpty={ !favoriteID.length } />
				<Grid container spacing={ 2 } sx={ { marginBottom: '40px' } }>
					{ favoritesCards }
				</Grid>
			</Container>
		</>
	)
}

export default Favorites