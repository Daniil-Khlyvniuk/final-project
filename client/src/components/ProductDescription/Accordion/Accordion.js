import React, {useState} from 'react'
import {Box, AccordionDetails, AccordionSummary, Accordion, Typography} from '@mui/material'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'


const AccordionProduct = () => {
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
							Product Details
						</Typography>
					</Box>

				</AccordionSummary>
				<AccordionDetails sx={{maxWidth: '447px' , pl:'54px'}}>
					Far far away, behind the word mountains,
					far from the countries Vokalia and Consonantia,
					there live the blind texts.
					Far far away, behind the word mountains,
					far from the countries
					Vokalia and Consonantia, there live the blind texts
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

export default AccordionProduct