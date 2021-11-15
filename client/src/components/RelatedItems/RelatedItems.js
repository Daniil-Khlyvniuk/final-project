import React from 'react'
import PropTypes from 'prop-types'
// import {useSelector} from 'react-redux'
import Carousel from '../Carousel/Carousel'


// eslint-disable-next-line react/prop-types
const RelatedItems = ({ slides }) => {
	// const ItemView = useSelector(state => state.ItemView)


	// const {
	// 	name,
	// 	_id,
	// 	imageUrls,
	// } = product


	// const imageUrl = imageUrls[0]

	// const slide =  [{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// },{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// },{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// },{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// },{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// },{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// },{
	// 	imageUrl: `http://localhost:5000/${imageUrl}`,
	// 	customId: _id
	// }]

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

	// console.log(slides.imageUrl)
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
	slides: PropTypes.object,
	product: PropTypes.object,
	// _id: PropTypes.string,
	// imageUrls: PropTypes.string,
	// card: PropTypes.shape({
	// 	article: PropTypes.number,
	// 	title: PropTypes.string,
	// }),
}


export default RelatedItems