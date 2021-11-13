import React, { useEffect } from 'react'
import RelatedItems from './RelatedItems'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import productsReducer, { productsSelectors } from '../../store/Products'
import axios from 'axios'

const RelatedItemsList = () => {
	const relatedIds = useSelector(productsSelectors.getRelatedIds())
	let relatedList = useSelector(productsSelectors.getRelatedProductsList())
	const dispatch = useDispatch()
	// const id = '618d61dcc4e9563080ca7acf'
	// const id = '618d61e7c4e9563080ca7ae5'
	const id = '618d61dcc4e9563080ca7ad4'
	// const id = '618d61e2c4e9563080ca7add'
	// const id = '618b85bbaf938f27ec67e6e2'

	// eslint-disable-next-line no-console
	console.log(relatedIds)

	//передаем в редакс текущий id товара
	useEffect(() => {
		dispatch(productsReducer.addRelatedId(id))
	}, [relatedList, dispatch])

	// eslint-disable-next-line no-console
	console.log(dispatch)

	useEffect(() => {
		let requests =
      relatedIds.map(id => axios(`/api/products/${id}`))
		Promise.all(requests).then(res => {
			dispatch(productsReducer.setRelatedProductsList(
				res.map(prod => prod.data)))
		}).catch(err => {
			// eslint-disable-next-line no-console
			console.log('err', err)
		})
	},[relatedIds, dispatch])

	//убираем текущий товар из массива
	if (relatedList.length) {
		relatedList = relatedList.filter(prod => prod._id !== id)
	}

	return (
		<div>
			{relatedList.length && relatedList.reverse().map(prod => {
				if (prod._id !== id) {
					return (
						<RelatedItems
							key={prod.id}
							product={prod}
							to='/'
							component={RouterLink}
						/>
					)
				}
			})}
		</div>
	)
}

export default RelatedItemsList