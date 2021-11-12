import React from 'react'
import PropTypes from 'prop-types'
// import {useSelector} from 'react-redux'



const RelatedItems = ({ product }) => {
	// const ItemView = useSelector(state => state.ItemView)


	const {
		name,
		_id,
	} = product



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
			<li>
				<h1>{name}</h1>
				<h2>{_id}</h2>
				{/*<img src={url} width="200" height="180" alt="laptop"/>*/}
			</li>
		</div>
	)
}


RelatedItems.propTypes = {
	product: PropTypes.object
	// _id: PropTypes.string,
	// name: PropTypes.string,
	// card: PropTypes.shape({
	// 	article: PropTypes.number,
	// 	title: PropTypes.string,
	// }),
}


export default RelatedItems