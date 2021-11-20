import React from 'react'
import { StyledMenuItem } from './style'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import productsAPI from '../../../utils/API/productsAPI'
// import { useDispatch } from 'react-redux'
// import productsReducer from '../../../store/Products'

const DeepChild = ({ text }) => {
	// const dispatch = useDispatch()

	const getProductsByCategory = () => {
		// productsAPI.getFilteredProducts(`?category=${text}`)
		// 	.then(products => dispatch(productsReducer.setAllProducts(products)))
	}

	return (
		<Link
			to={`/shop/catalog?category=${text}`}
			style={{ textDecoration: 'none' }}
		>
			<StyledMenuItem onClick={getProductsByCategory}>
				{text}
			</StyledMenuItem>
		</Link>
	)
}

DeepChild.propTypes = {
	text: PropTypes.string.isRequired,
}

export default DeepChild