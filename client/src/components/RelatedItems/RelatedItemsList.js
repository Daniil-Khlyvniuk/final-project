import React, { useEffect } from 'react'
import RelatedItems from './RelatedItems'
import { Link as RouterLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import productsReducer, { productsSelectors } from '../../store/Products'
import axios from 'axios'

// const slideData = [
// 	{
// 		id: '1',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
// 		title: 'OCEAN  COLLECTION',
// 		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '2',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://shuhlyadka.com.ua/image/cache/catalog/Aran%20Clasy/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%20%D1%81%D0%B0%D1%82%D0%B8%D0%BD%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F%20%D0%B5%D0%B2%D1%80%D0%BE%20Aran%20Clasy%20Adra%20v1-800x800.jpg',
// 		description: 'SUBSCRIBE NOW AND GET 15% OFF ON YOUR FIRST ORDER',
// 		category: '5d99f68e419d040eec0f722c'
// 	},{
// 		id: '3',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},{
// 		id: '4',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '5',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '6',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '7',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '8',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '9',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '10',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// 	{
// 		id: '11',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},{
// 		id: '12',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
// 		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
// 		category: '5d99f68e419d040eec0f722c'
// 	},{
// 		id: '1',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
// 		title: 'OCEAN  COLLECTION',
// 		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
// 		category: '5d99f68e419d040eec0f722c'
// 	},{
// 		id: '1',
// 		customId: 'promotion-women-clothing',
// 		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
// 		title: 'OCEAN  COLLECTION',
// 		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
// 		category: '5d99f68e419d040eec0f722c'
// 	},
// ]

const RelatedItemsList = () => {
	// const [items, setItems] = useState([])
	const relatedIds = useSelector(productsSelectors.getRelatedIds())
	let relatedList = useSelector(productsSelectors.getRelatedProductsList())
	const dispatch = useDispatch()
	// const id = '618d61efc4e9563080ca7aea'
	// const id = '618d61dcc4e9563080ca7acf'
	const id = '618d6217c4e9563080ca7b0a'
	// const id = '618d6b7e9a51df0aacce12b6'

	// eslint-disable-next-line no-console
	console.log(relatedIds)

	//передаем в редакс текущий id товара
	useEffect(() => {
		dispatch(productsReducer.addRelatedId(id))
	}, [])

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
	}, [])

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
			{/*<ul>{revCards.slice(1, 11)}</ul>*/}
		</div>
	)
}

export default RelatedItemsList