import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../../components/CardList/CardList'
import favoritesActions, { favoritesSelectors } from '../../store/Favorites'

const Favorites = () => {
	const favorites = useSelector(favoritesSelectors.getFavorites())
	const dispatch = useDispatch()

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites'))

		if (favorites) {
			dispatch(favoritesActions.addFavorites(favorites))
		}
	}, [dispatch])

	return (
		<Container maxWidth="lg">
			<h1>Favorites</h1>
			{favorites.length === 0 &&
				<p>Nothing has been added to favorites...</p>
			}
			<CardList />
		</Container>
	)
}

export default Favorites
