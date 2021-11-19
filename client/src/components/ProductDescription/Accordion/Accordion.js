import React, {useState} from 'react'
import {Box, AccordionDetails, AccordionSummary, Accordion, Typography} from '@mui/material'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import PropTypes from 'prop-types'


const AccordionProduct = ({description = 'Random string', accordionTitle = 'Product Details'}) => {
	const [open, setOpen] = useState(false)

	const handleOpenAccordion = () => {
		setOpen((prevState => {
			setOpen(!prevState)
		}))
	}

	return(
		<Box>
			<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordion} expanded={open}>
				<AccordionSummary>
					<Box sx={{display:'flex', alignItems:'center'}}>
						{open ?
							<RemoveOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/> :
							<AddOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/>
						}
						<Typography fontSize={16} fontWeight={600}>
							{accordionTitle}
						</Typography>
					</Box>

				</AccordionSummary>
				<AccordionDetails sx={{
					lineHeight:'25px',
					pl:'54px',
					pt:'0px',
					color: 'rgba(92, 94, 96, 0.5)',
					fontSize:'14px',
					fontWeight:'400'}}>
					{description}
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

AccordionProduct.propTypes={
	description: PropTypes.string,
	accordionTitle: PropTypes.string
}

export default AccordionProduct