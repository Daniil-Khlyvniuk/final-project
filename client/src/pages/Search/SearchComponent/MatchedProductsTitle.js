import PropTypes from 'prop-types'
import React from 'react'
import MatchedProducts from './matchedProducts'
import NotMatched from './NotMatched'


const MatchedProductsTitle = ({ isAnyMatched }) => {
	return (
		!isAnyMatched
			?
			<NotMatched/>
			:
			<MatchedProducts />
	)
}

MatchedProductsTitle.propTypes = {
	isAnyMatched: PropTypes.bool.isRequired
}

export default MatchedProductsTitle