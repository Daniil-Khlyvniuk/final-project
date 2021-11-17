import PriceRange from './PriceRange'
import SearchSize from './SearchSize'
import React, {useState} from 'react'
import {Box, AccordionDetails, AccordionSummary, Accordion, Typography} from '@mui/material'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
// import ColorSearch from './ColorSearch'


const LeftSide = () => {
	const [open, setOpen] = useState(false)
	const [openSize, setOpenSize] = useState(false)
	const [openColor, setOpenColor] = useState(false)
	const [openFabric, setOpenFabric] = useState(false)

	const handleOpenAccordion = () => {
		setOpen((prevState => {
			setOpen(!prevState)
		}))
	}
	const handleOpenAccordionSize = () => {
		setOpenSize((prevState => {
			setOpenSize(!prevState)
		}))
	}
	const handleOpenAccordionColor = () => {
		setOpenColor((prevState => {
			setOpenColor(!prevState)
		}))
	}
	const handleOpenAccordionFabric = () => {
		setOpenFabric((prevState => {
			setOpenFabric(!prevState)
		}))
	}

	return(
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	  <div>
			<Box>
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordion} expanded={open}>
					<AccordionSummary>
						<Box sx={{display:'flex', alignItems:'center'}}>
							{open ?
								<RemoveOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/> :
								<AddOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/>
							}
							<Typography fontSize={16} fontWeight={600}>
              PRICE
							</Typography>
						</Box>

					</AccordionSummary>
					<AccordionDetails sx={{maxWidth: '447px' , pl:'54px', color: 'rgba(92, 94, 96, 0.5)'}}>
						<PriceRange />
					</AccordionDetails>
				</Accordion>
			</Box>
			<box>
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordionSize} expanded={openSize}>
					<AccordionSummary>
						<Box sx={{display:'flex', alignItems:'center'}}>
							{openSize ?
								<RemoveOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/> :
								<AddOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/>
							}
							<Typography fontSize={16} fontWeight={600}>
              SIZE
							</Typography>
						</Box>

					</AccordionSummary>
					<AccordionDetails sx={{maxWidth: '447px' , pl:'54px', color: 'rgba(92, 94, 96, 0.5)'}}>
						<SearchSize />
					</AccordionDetails>
				</Accordion>
			</box>
			<box>
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordionColor} expanded={openColor}>
					<AccordionSummary>
						<Box sx={{display:'flex', alignItems:'center'}}>
							{openColor ?
								<RemoveOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/> :
								<AddOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/>
							}
							<Typography fontSize={16} fontWeight={600}>
                COLOR
							</Typography>
						</Box>
						{/*<ColorSearch />*/}
					</AccordionSummary>
					<AccordionDetails sx={{maxWidth: '447px' , pl:'54px', color: 'rgba(92, 94, 96, 0.5)'}}>
						<p>COLOR</p>
					</AccordionDetails>
				</Accordion>
			</box>
			<box>
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordionFabric} expanded={openFabric}>
					<AccordionSummary>
						<Box sx={{display:'flex', alignItems:'center'}}>
							{openFabric ?
								<RemoveOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/> :
								<AddOutlinedIcon fontSize={'small'} sx={{mr:'19px'}}/>
							}
							<Typography fontSize={16} fontWeight={600}>
                FABRIC
							</Typography>
						</Box>

					</AccordionSummary>
					<AccordionDetails sx={{maxWidth: '447px' , pl:'54px', color: 'rgba(92, 94, 96, 0.5)'}}>
						<p>FABRIC</p>
					</AccordionDetails>
				</Accordion>
			</box>
		</div>
	)
}


export default LeftSide
