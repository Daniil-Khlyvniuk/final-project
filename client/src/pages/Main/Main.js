import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../../components/CardList/CardList'
import Carousel from '../../components/Carousel/Carousel'
import Popular from '../../components/Popular/Popular'
import { slidesOperations, slidesSelectors } from '../../store/slider'
import UseSeo from '../../utils/customHooks/useSeo'


const Main = () => {
	const slides = useSelector(slidesSelectors.getSlides())
	const seoWords = 'bedroom, Kitchen, Loungewear, bedding store, luxury bedding sets, king size bedspreads, king bed sheets, comforters on sale'

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(slidesOperations.fetchSliders())
	}, [ dispatch ])

	return (
		<>
			<UseSeo
				title={ 'Bedding Shop' }
				description={ 'Bedding Shop, all for ' }
				keywords={ seoWords }
			/>
			<Container maxWidth="lg" sx={ { minWidth: 320 } }>
				<Carousel slides={ slides } main={ true } />
				<CardList />
				<Popular />
			</Container>
		</>
	)
}

export default Main