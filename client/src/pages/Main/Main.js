import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import CardList from '../../components/CardList/CardList'
import Popular from '../../components/Popular/Popular'
import Carousel from '../../components/Carousel/Carousel'
import { slidesOperations, slidesSelectors } from '../../store/Slider'
import { useDispatch, useSelector } from 'react-redux'
import UseSeo from '../../utils/customHooks/useHelmet'

const Main = () => {
	const slides = useSelector(slidesSelectors.getSlides())

	const dispatch = useDispatch()
	useEffect( () =>  {
		dispatch(slidesOperations.fetchSliders())
	}, [dispatch])

	return (	
		<>
			<UseSeo 
				title = {'Bedding Shop'}
				description = {'Bedding Shop, all for '}
				keywords = {'bedroom, Kitchen, Loungewear, bedding store, luxury bedding sets, king size bedspreads, king bed sheets, comforters on sale'}
			/>
			<Container maxWidth="lg" sx={{ minWidth: 320 }}>
				<Carousel slides={slides} main={true}/>
				<CardList />
				<Popular/>
			</Container>
		</>
	)
}

export default Main