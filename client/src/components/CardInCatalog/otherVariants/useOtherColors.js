// eslint-disable-next-line no-unused-vars
import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


const UseOtherColors = (parentId) => {
	const [ variants, setVariants ] = useState([])

	useEffect(() => {
		axios(`/api/products/variants/${ parentId }`)
			.then(res => {
				const vars = res.data.map((variant) => (
					{
						varId: variant._id,
						colorCssValue: variant.color.cssValue,
						colorID: variant.color._id
					}
				))
				setVariants(vars)
			})

	}, [ parentId ])

	const filterDuplicate = (variantData) => {
		return variantData.reduce((acc, variant) => {
			const isExist = acc.some(
				el => el.colorCssValue === variant.colorCssValue
			)
			if (isExist) return acc
			acc.push(variant)
			return acc
		}, [])
	}

	return filterDuplicate(variants)
}


UseOtherColors.propTypes = {
	parentId: PropTypes.string.isRequired
}

export default UseOtherColors