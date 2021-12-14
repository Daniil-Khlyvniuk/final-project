import React from 'react'
import {Box} from '@mui/material'

import ColorSearch from './ColorSearch'
import CatalogAccordion from './CatalogAccordion'
import PriceRange from './PriceRange'
import SearchSize from './SearchSize'
import { useSelector } from 'react-redux'
import {filterSelectors} from '../../store/filter'
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
				>
					<PriceRange />
				</CatalogAccordion>
			</Box>
			<Box>
				<CatalogAccordion
					expanded={!!size.length}
					title={'size'}
				>
					<SearchSize />
				</CatalogAccordion>
			</Box>
			<Box>
				<CatalogAccordion
					expanded={!!color.length}
					title={'color'}
					withBottomBorder={false} 
				>
					<ColorSearch />
				</CatalogAccordion>	
			</Box>
			{/* <Box>
				<CatalogAccordion expanded={false} title={'fabric'}><SearchFabrik /></CatalogAccordion>	
			</Box> */}
		</Box>
	)
}

export default LeftSide