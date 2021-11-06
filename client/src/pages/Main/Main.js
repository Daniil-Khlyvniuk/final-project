import React from 'react'
import CardList from '../../components/CardList/CardList'
import Popular from '../../components/Popular/Popular'
import Carousel from '../../components/Carousel/Carousel'

const Main = () => {
	return (
		<div>
			<Carousel/>
			<CardList />
			<Popular/>
		</div>
	)
}

export default Main
