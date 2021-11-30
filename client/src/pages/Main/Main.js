import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import CardList from '../../components/CardList/CardList'
import Popular from '../../components/Popular/Popular'
import Carousel from '../../components/Carousel/Carousel'
import { slidesOperations, slidesSelectors } from '../../store/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

const Main = () => {
	const slides = useSelector(slidesSelectors.getSlides())

	const dispatch = useDispatch()
	useEffect( () =>  {
		dispatch(slidesOperations.fetchSliders())
	}, [dispatch])

	return (	
		<>
			<Helmet>
				<html lang='en'/>
				<title>Bedding Shop</title>
				<meta name='description' content='Bedding Shop'/>
				<meta name='keywords' content='bedroom, Kitchen, Loungewear, bedding store, luxury bedding sets, king size bedspreads, king bed sheets, comforters on sale' />
			</Helmet>
			<Container maxWidth="lg">
				<Carousel slides={slides} main={true}/>
				<CardList />
				<Popular/>
			</Container>
		</>
	)
}

export default Main
