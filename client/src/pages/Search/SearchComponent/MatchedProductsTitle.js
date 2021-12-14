import PropTypes from 'prop-types'
import React from 'react'
import MatchedProducts from './matchedProducts'
import NotMatched from './NotMatched'


const MatchedProductsTitle = ({ isAnyMatched, ...rest }) => {
	return (
		isAnyMatched
			?
			<MatchedProducts { ...rest }/>
			:
			<NotMatched  />
	)
}

MatchedProductsTitle.propTypes = {
	isAnyMatched: PropTypes.bool.isRequired,
	rest: PropTypes.object.isRequired,
}

export default MatchedProductsTitle