import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import productsReducer, { productsSelectors } from '../../store/Products'
import axios from 'axios'
import Carousel from '../Carousel/Carousel'
import { ProductSelector } from '../../store/Product'


const RelatedItemsList = () => {
	const relatedIds = useSelector(productsSelectors.getRelatedIds())
	let relatedList = useSelector(productsSelectors.getRelatedProductsList())
	const dispatch = useDispatch()

	const activeProduct = useSelector(ProductSelector.getProduct())
	const id = activeProduct._id

	useEffect(() => {
		dispatch(productsReducer.addRelatedId(id))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [relatedList, dispatch])

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
	if (relatedList.length) {
		relatedList = relatedList.filter(prod => prod._id !== id).reverse()
	}


	const slides = relatedList.reverse().map(prod => {
		if (prod._id !== id) {
			return {
				imageUrl: `http://localhost:5000/${prod.variants.imageUrls[0]}`,
				customId: prod.variants._id,
				price: prod.variants.currentPrice,
				name: prod.name,
				prodId: prod._id,
			}
		}
	})


	return (
		<div>
			{relatedList.length > 0 &&
			<Carousel
				slides={slides}
				related={true}
			/>
			}
		</div>
	)
}

export default RelatedItemsList
