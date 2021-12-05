import React from 'react'
import AccordionProduct from '../ProductDescription/Accordion/Accordion'
import {Divider, Typography} from '@mui/material'
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
const RightMenu = ({tabs}) => {

	return (
		<div>
			{/* eslint-disable-next-line react/prop-types */}
			{tabs && tabs.map(tab => {
				return (
					<>
						<Typography
							id={tab.id}
							color={'rgba(140, 140, 140, 1)'}
							fontSize={'16px'}
							fontWeight={'700'}
							sx={{lineHeight:'24px',textTransform:'uppercase', paddingY:'10px',  '&:first-child':{padding:'0 0 10px 0'}}}
						>
							{!!tab.subject && tab.tabTitle}
						</Typography>
						{!!tab.description && <Typography
							color={'#000F08'}
							fontSize={'14px'}
							sx={{lineHeight:'25px' , pb:'15px', pl:'15px', textTransform:'uppercase'}}
						>
							{tab.description}
						</Typography>}
						{!!tab.subject && <Divider/>}
						{
							tab.subject &&
					tab.subject.map(item => {
						return (
							<div key={item.title}>
								<AccordionProduct
									expanded={true}
									key={item.title}
									accordionTitle={item?.description ?item.title : null}
									description={item.description}/>
								{item?.description ? <Divider/> : null}
							</div>)
					})
						}
					</>
				)
			})}
		</div>
	)
}
RightMenu.propTypes = {
	tabs : PropTypes.array
}
export default RightMenu