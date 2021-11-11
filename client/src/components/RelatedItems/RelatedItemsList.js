import React, { useEffect } from 'react'
import RelatedItems from './RelatedItems'
import { Link as RouterLink } from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {productsSelectors,productsActions } from '../../store/Products' //

const slideData = [
	{
		id: '1',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
		title: 'OCEAN  COLLECTION',
		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '2',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://shuhlyadka.com.ua/image/cache/catalog/Aran%20Clasy/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%20%D1%81%D0%B0%D1%82%D0%B8%D0%BD%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F%20%D0%B5%D0%B2%D1%80%D0%BE%20Aran%20Clasy%20Adra%20v1-800x800.jpg',
		description: 'SUBSCRIBE NOW AND GET 15% OFF ON YOUR FIRST ORDER',
		category: '5d99f68e419d040eec0f722c'
	},{
		id: '3',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},{
		id: '4',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '5',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '6',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '7',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '8',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '9',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '10',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '11',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},{
		id: '12',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},{
		id: '1',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
		title: 'OCEAN  COLLECTION',
		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
		category: '5d99f68e419d040eec0f722c'
	},{
		id: '1',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
		title: 'OCEAN  COLLECTION',
		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
		category: '5d99f68e419d040eec0f722c'
	},
]


const RelatedItemsList = () => {
	// const [items, setItems] = useState([])
	const relatedIds = useSelector(productsSelectors.getRelatedIds())
	const dispatch = useDispatch()
	const test = 111

	// eslint-disable-next-line no-console
	console.log(relatedIds)

	useEffect(() => {
		// 	localStorage.setItem('related', [])
		// 	const ItemView = localStorage.getItem('related')
		// 		? JSON.parse(localStorage.getItem('related'))
		// 		: []
		// 	// if (ItemView.find((card) => card.id === items.id)) {
		// 	// 	setItems.shift()
		// 	// 	ItemView.shift()
		// 	// }
		// 	if (items.length >= 10) {
		// 		setItems.pop()
		// 		ItemView.pop()
		// 	}
		dispatch(productsActions.addRelatedId(test))
	}, [test])



	const addToRelated = () => {
		// if (!items.find((item) => item.id === id)) {
		// 	const newCard = slideData.filter((item) => item.id === id)
		// 	const [{...addToRelated}] = newCard
		// 	setItems([...items, addToRelated])
		// 	localStorage.setItem(
		// 		'related',
		// 		JSON.stringify([...items, addToRelated])
		// 	)
		// }
	}


	const card = slideData.map((item) => (
		<RelatedItems
			key={item.id}
			url={item.imageUrl}
			to='/'
			component={RouterLink}
		/>
	))

	const revCards = card.reverse()
	return (
		<div>
			<ul>{revCards.slice(1, 11)}</ul>
			<button
				onClick={()=>{addToRelated()}}
			>click here</button>
		</div>
	)
}

export default RelatedItemsList