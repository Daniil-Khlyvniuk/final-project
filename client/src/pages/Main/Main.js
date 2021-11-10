import React from 'react'
import { Container } from '@mui/material'
import CardList from '../../components/CardList/CardList'
import Popular from '../../components/Popular/Popular'
import Carousel from '../../components/Carousel/Carousel'

const Main = () => {
	return (
		<Container maxWidth="lg">
			<Carousel/>
			<CardList />
			<Popular/>
		</Container>
	)
}

export default Main
