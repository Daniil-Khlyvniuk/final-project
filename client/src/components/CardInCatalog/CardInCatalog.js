import React from 'react'
import OtherVariants from './otherVariants/otherVariants'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { stringSlice } from '../../utils/helpers/stringHelper'
import Tooltip from '@mui/material/Tooltip'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import Icon from './CardInCatalogElems/Icon'

const CardInCatalog = ({ title, image, price, _id, parentId, color }) => {
	const classes = useStyles()

	return (
		<Box className={classes.container}>
			<Link
				to={`/product-details/${_id}`}
				style={{ textDecoration: 'none' }}
			>
				<img
					className={classes.img}
					src={image} alt="img"
					data-testid="image-catalog-card"
				/>
				<p
					className={classes.cardTitle}
					data-testid="title-catalog-card-main"
				>
					{stringSlice(title, 22)}
					<span
						className={classes.cardPrice}
						data-testid="price-catalog-card-main"
					>
						{price} $
					</span>
				</p>
			</Link>

			<Tooltip title="Click for details">
				<Box
					className={classes.blockHover}
					sx={{ fontSize: { sm: '10px' } }}
				>
					<FavoriteButton
						id={_id}
						dataTestid='favorite-button-catalog-card'
					>
						<Icon id={_id} />
					</FavoriteButton>

					<Box className={classes.contentWrapper}>
						<p
							className={classes.hoverTitle}
							data-testid="title-catalog-card-hover"
						>
							{stringSlice(title, 25)}
						</p>
						<p
							className={classes.hoverPrice}
							data-testid="price-catalog-card-hover"
						>
							{price} $
						</p>

						<OtherVariants currColor={color} parentId={parentId} />
					</Box>

				</Box>
			</Tooltip>
		</Box>
	)
}

CardInCatalog.propTypes = {
	_id: PropTypes.string,
	parentId: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	color: PropTypes.object
}

export default CardInCatalog