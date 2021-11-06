import React from 'react'
import { useSelector } from 'react-redux'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { makeStyles } from '@mui/styles'
import { productsSelectors } from '../../store/Products'

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
	const products = useSelector(productsSelectors.getProducts())
	const classes = useStyles()

	return (

		<div className={classes.container}>
			{
				!!products?.list
				&& products?.list?.map((item, key) => (
					<CardInCatalog
						key={key} image={item.img}
						title={item.title}
						price={item.price} />
				))
			}
		</div>
	)
}

export default Catalog