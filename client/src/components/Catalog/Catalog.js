import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import {makeStyles} from '@mui/styles'
import {getAllProducts} from '../../store/Products/productsSlice'
import axios from "axios";


const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: '880px',
		gap: '20px',
		margin: '0 auto',
		justifyContent: 'center',
	}
})

const Catalog = () => {
	const products = useSelector(state => state.products)
	const dispatch = useDispatch()
	const classes = useStyles()

	const fetch = async () => {
		const data = await axios
			.get('/products.json')
			.then(products => products?.data)
		if (!data) return

		dispatch(getAllProducts(data))
	}

	useEffect(() => {
		fetch()
	}, [])
	return (

		<div className={classes.container}>
			{
				!!products?.list
				&& products?.list?.map((item, key) => (
					<CardInCatalog key={key} image={item.img} title={item.title} price={item.price}/>
				))
			}
		</div>
	)
}

export default Catalog