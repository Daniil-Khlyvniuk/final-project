import React from 'react'
import PropTypes from 'prop-types'


const RelatedItems = (props) => {
	const {card: {title, article, url}} = props

	return (
		<div>
			<h1>{title}</h1>
			<p>{article}</p>
			<img src={url} width="200" height="180" alt="laptop"/>
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