import React from 'react'
import {Box} from '@mui/material'

import ColorSearch from './ColorSearch'
import CatalogAccordion from './CatalogAccordion'
import PriceRange from './PriceRange'
import SearchSize from './SearchSize'
// import SearchFabrik from './SearchFabrik'

const LeftSide = () => {
	return(
		<Box>
			<Box>
				<CatalogAccordion expanded={false} title={'price'} details={<PriceRange />} />
			</Box>
			<Box>
				<CatalogAccordion expanded={false} title={'size'} details={<SearchSize />} />
			</Box>
			<Box>
				<CatalogAccordion expanded={false} title={'color'} details={<ColorSearch />} withBottomBorder={false} />
			</Box>
			{/* <Box>
				<CatalogAccordion expanded={false} title={'fabric'} details={<SearchFabrik />}/>
			</Box> */}
		</Box>
	)
}

export default LeftSide