import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import modalActions, { modalSelectors } from '../../store/Modal'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox } from './styles'

const BasicModal = ({ style, body }) => {
	const open = useSelector(modalSelectors.checkOpen())
	const dispatch = useDispatch()
	const handleClose = () => dispatch(modalActions.handleClose(false))

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
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
	body: PropTypes.object
}

export default BasicModal
