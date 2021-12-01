import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import { useDispatch } from 'react-redux'
// import modalActions from '../../store/Modal'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox } from './styles'

const BasicModal = ({ style, body, handleClose, openModal }) => {
	// const dispatch = useDispatch()
	// const handleClose = () => dispatch(modalActions.modalToggle(false))


	return (
		<div>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				style={{overflowY: 'scroll', overflowX: 'hidden'}}
			>
				<Box sx={style}>
					<StyledBox>
						<IconButton
							onClick={handleClose}
							aria-label="close"
							sx={{ padding: 0 }}
						>
							<CloseIcon />
						</IconButton>
					</StyledBox>
					<div>{body}</div>
				</Box>
			</Modal>
		</div>
	)
}

BasicModal.propTypes = {
	openModal: PropTypes.bool,
	style: PropTypes.object,
	body: PropTypes.element,
	handleClose: PropTypes.func
}

export default BasicModal
