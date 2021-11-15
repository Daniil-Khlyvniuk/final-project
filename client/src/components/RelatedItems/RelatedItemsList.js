import React, { useEffect } from 'react'
import RelatedItems from './RelatedItems'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import productsReducer, { productsSelectors } from '../../store/Products'
import axios from 'axios'
// import Carousel from '../Carousel/Carousel'

const RelatedItemsList = () => {
	const relatedIds = useSelector(productsSelectors.getRelatedIds())
	let relatedList = useSelector(productsSelectors.getRelatedProductsList())
	const dispatch = useDispatch()
	// const id = '6190058db6ba7e18e4336d8b'
	// const id = '61900597b6ba7e18e4336d9d'
	// const id = '6190058db6ba7e18e4336d8b'
	// const id = '619005abb6ba7e18e4336db1'
	// const id = '618b875eaf938f27ec67e6f1'
	// const id = '6190059fb6ba7e18e4336da9'
	// const id = '61900607b6ba7e18e4336dbb'
	const id = '618b85bbaf938f27ec67e6e2'
	// const id = '618b8c4b9626a936f8db23ae'

	//передаем в редакс текущий id товара
	useEffect(() => {
		dispatch(productsReducer.addRelatedId(id))
	}, [relatedList, dispatch])

	// eslint-disable-next-line no-console
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



	const slides = relatedList.length && relatedList.reverse().map(prod => {
		if (prod._id !== id) {
			return {
				imageUrl: `http://localhost:5000/${prod.imageUrls[0]}`,
				customId: prod._id,
			}
		}
	})

	return (
		<div>
			<RelatedItems
				slides={slides}
				to='/'
				component={RouterLink}
			/>
		</div>
	)

	// return (
	// 	<div>
	// 		{relatedList.length && relatedList.reverse().map(prod => {
	// 			if (prod._id !== id) {
	// 				return (
	// 					// <Carousel
	// 					// 	slides={ufo}
	// 					// 	related={true}
	// 					// />
	// 					<RelatedItems
	// 						ufo={ufo}
	// 						imageUrl={prod.imageUrls}
	// 						key={prod.id}
	// 						product={prod}
	// 						to='/'
	// 						component={RouterLink}
	// 					/>
	// 				)
	// 			}
	// 		})}
	// 	</div>
	// )
}

export default RelatedItemsList