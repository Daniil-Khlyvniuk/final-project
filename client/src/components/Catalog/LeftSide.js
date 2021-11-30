import React from 'react'
import {Box} from '@mui/material'

import ColorSearch from './ColorSearch'
import CatalogAccordion from './CatalogAccordion'
import PriceRange from './PriceRange'
import SearchSize from './SearchSize'
import { useSelector } from 'react-redux'
import {filterSelectors} from '../../store/Filter'
// import SearchFabrik from './SearchFabrik'


const LeftSide = () => {
	const {
		size,
		color,
		minPrice,
		maxPrice,
	} = useSelector(filterSelectors.getFilters())

	return(
		<Box>
			<Box>
				<CatalogAccordion
					expanded={!!minPrice || !!maxPrice}
					title={'price'}
					details={<PriceRange />} />
			</Box>
			<Box>
				<CatalogAccordion
					expanded={!!size.length}
					title={'size'}
					details={<SearchSize />} />
			</Box>
			<Box>
				<CatalogAccordion
					expanded={!!color.length}
					title={'color'}
					details={<ColorSearch />}
					withBottomBorder={false} />
			</Box>
			{/* <Box>
				<CatalogAccordion expanded={false} title={'fabric'} details={<SearchFabrik />}/>
			</Box> */}
		</Box>
	)
}

export default LeftSide