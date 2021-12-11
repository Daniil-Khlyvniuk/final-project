import React, { Component } from 'react'
import Error500 from '../../pages/Error500/Error500'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	// eslint-disable-next-line no-unused-vars
	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return <Error500 />
		}

		return this.props.children
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.any,
}

export default ErrorBoundary