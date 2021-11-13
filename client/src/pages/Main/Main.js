import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import CardList from '../../components/CardList/CardList'
import Popular from '../../components/Popular/Popular'
import Carousel from '../../components/Carousel/Carousel'
import { slidesOperations, slidesSelectors } from '../../store/Slider'
import { useDispatch, useSelector } from 'react-redux'


const Main = () => {

	const slides = useSelector(slidesSelectors.getSlides())
	// eslint-disable-next-line no-console
	console.log('NACHALO ---',slides)
	// const error = useSelector(slidesSelectors.getError())
	// const isLoading = useSelector(slidesSelectors.getError())

	const dispatch = useDispatch()
	useEffect( () =>  {
		dispatch(slidesOperations.fetchSliders())
	}, [dispatch])


	return (
		<Container maxWidth="lg">
			<Carousel slides={slides}/>
			<CardList />
			<Popular/>
		</Container>
	)
}

export default Main
