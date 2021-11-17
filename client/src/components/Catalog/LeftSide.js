import PriceRange from './PriceRange'
import SearchSize from './SearchSize'
import React, {useState} from 'react'
import {Box, AccordionDetails, AccordionSummary, Accordion, Typography} from '@mui/material'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
// import SearchFabrik from './SearchFabrik'
import ColorSearch from './ColorSearch'


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

	const style = {
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
	}

	const styleOpen = {
		borderBottom: 'none'
	}

	return(
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	  <div>
			<Box>
				<Accordion
					sx={{boxShadow:'none'}}
					onChange={handleOpenAccordion}
					expanded={open}
					style={open ? styleOpen : style}
				>
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
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordionSize} expanded={openSize} style={openSize ? styleOpen : style}>
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
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordionColor} expanded={openColor} style={openColor ? styleOpen : style}>
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
					</AccordionSummary>
					<AccordionDetails sx={{maxWidth: '447px' , pl:'54px', color: 'rgba(92, 94, 96, 0.5)'}}>
						<ColorSearch />
					</AccordionDetails>
				</Accordion>
			</box>
			<box>
				<Accordion sx={{boxShadow:'none'}} onChange={handleOpenAccordionFabric} expanded={openFabric} style={openFabric ? styleOpen : style}>
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
					{/*<AccordionDetails sx={{maxWidth: '447px' , pl:'54px', color: 'rgba(92, 94, 96, 0.5)'}}>*/}
					{/*	<SearchFabrik />*/}
					{/*</AccordionDetails>*/}
				</Accordion>
			</box>
		</div>
	)
}


export default LeftSide
