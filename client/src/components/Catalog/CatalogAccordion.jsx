import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box, AccordionDetails, AccordionSummary, Accordion, Typography} from '@mui/material'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

const CatalogAccordion = ({
	expanded,
	title,
	details,
	// eslint-disable-next-line no-unused-vars
	withBottomBorder = true
}) => {
	const [isOpen, setIsOpen] = useState(expanded)
	const handleOpenAccordion = () => {
		setIsOpen((prevState => {
			setIsOpen(!prevState)
		}))
	}

	return (
		<Accordion
			onChange={handleOpenAccordion}
			expanded={isOpen}
			square={true}
			sx={{
				boxShadow:'none',
				borderBottom: () => 
					!withBottomBorder 
						? 'none' 
						: (isOpen ? 'none' : '1px solid #8C8C8C')
			}}
		>
			<AccordionSummary>
				<Box sx={{display:'flex', alignItems:'center'}}>
					{isOpen ?
						<RemoveOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/> :
						<AddOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/>
					}
					<Typography
						fontSize={16}
						fontWeight={600}
						sx={{textTransform: 'uppercase'}}
					>
						{title}
					</Typography>
				</Box>

			</AccordionSummary>
			<AccordionDetails sx={{pl:'54px', color: '#373F41'}}>
				{details}
			</AccordionDetails>
		</Accordion>
	)
}

CatalogAccordion.propTypes = {
	expanded: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	details: PropTypes.element,
	withBottomBorder: PropTypes.bool,
}

export default CatalogAccordion
