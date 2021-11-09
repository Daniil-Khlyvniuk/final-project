import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'


const RelatedItems = (props) => {
	const {card: {title, article, url}} = props

	const ItemView = useSelector(state => state.ItemView)

	
	useEffect(() => {
		const ItemView = localStorage.getItem('view')
			? JSON.parse(localStorage.getItem('view'))
			: []
		if (ItemView.find((card) => card.article === article)) {
			ItemView.shift()
		}
		if (ItemView.length >= 10) {
			ItemView.pop()
		}
	}, [ItemView, article])


	return (
		<div>
			<li>
				<h1>{title}</h1>
				<p>{article}</p>
				<img src={url} width="200" height="180" alt="laptop"/>
			</li>
		</div>
	)
}


RelatedItems.propTypes = {
	card: PropTypes.shape({
		article: PropTypes.number,
		url: PropTypes.string,
		title: PropTypes.string,
	}),
}


export default RelatedItems