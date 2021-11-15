import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../Carousel/Carousel'

const RelatedItems = ({ slides }) => {
	

	console.log(slides)
	// useEffect(() => {
	// 	localStorage.setItem('related', [])
	// 	const ItemView = localStorage.getItem('related')
	// 		? JSON.parse(localStorage.getItem('related'))
	// 		: []
	// 	if (ItemView.find((card) => card.id === key)) {
	// 		ItemView.shift()
	// 	}
	// 	if (ItemView.length >= 10) {
	// 		ItemView.pop()
	// 	}
	// }, [ItemView, key])

	return (
		<div>
			<Carousel
				slides={slides}
				related={true}
			/>
		</div>
	)
}


RelatedItems.propTypes = {
	slides: PropTypes.object
	// _id: PropTypes.string,
	// name: PropTypes.string,
	// card: PropTypes.shape({
	// 	article: PropTypes.number,
	// 	title: PropTypes.string,
	// }),
}


export default RelatedItems