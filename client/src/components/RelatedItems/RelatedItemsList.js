import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import productsReducer, { productsSelectors } from '../../store/Products'
import axios from 'axios'
import Carousel from '../Carousel/Carousel'


const RelatedItemsList = () => {
	const relatedIds = useSelector(productsSelectors.getRelatedIds())
	let relatedList = useSelector(productsSelectors.getRelatedProductsList())
	const dispatch = useDispatch()
	// const id = '6190058db6ba7e18e4336d8b'
	// const id = '61900597b6ba7e18e4336d9d'
	// const id = '619005abb6ba7e18e4336db1'
	// const id = '6190059fb6ba7e18e4336da9'
	const id = '6190059fb6ba7e18e4336da9'
	// const id = '61900607b6ba7e18e4336dbb'


	//передаем в редакс текущий id товара
	useEffect(() => {
		dispatch(productsReducer.addRelatedId(id))
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
	},[relatedIds, dispatch])

	//убираем текущий товар из массива
	if (relatedList.length) {
		relatedList = relatedList.filter(prod => prod._id !== id).reverse()
	}

	const slides = relatedList.reverse().map(prod => {
		if (prod._id !== id) {
			return {
				imageUrl: `http://localhost:5000/${prod.imageUrls[0]}`,
				customId: prod._id,
				price: prod.currentPrice,
			}
		}
	})

	return (
		<div>
			{relatedList.length &&
			<Carousel
				slides={slides}
				related={true}
			/>
			}
		</div>
	)
}

export default RelatedItemsList