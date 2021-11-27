import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useDispatch } from 'react-redux'
import modalActions from '../../store/Modal'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox } from './styles'

const BasicModal = ({ style, body }) => {
	const dispatch = useDispatch()
	const handleClose = () => dispatch(modalActions.modalToggle(false))

	return (
		<div>
			<Modal
				open={true}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{ zIndex: 999999999999 }}
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
					{body}
				</Box>
			</Modal>
		</div>
	)
}

BasicModal.propTypes = {
	style: PropTypes.object,
	body: PropTypes.element
}

export default BasicModal
