import React from 'react'
import PropTypes from 'prop-types'

export const multiColor = () => {
	let width = 24, height = 24
	return (
		<svg viewBox="0 0 24 24" width={`${width}`} height={`${height}`}>
			<path d="M10 0V10L17.0372 2.89656C15.23 1.10625 12.7447 0 10 0Z" fill="#6E7181"/>
			<path d="M17.0372 2.89648L10 9.99992H20C20 7.22148 18.8663 4.70867 17.0372 2.89648Z" fill="#99B5BB"/>
			<path d="M10 20V10L17.0372 17.1034C15.23 18.8937 12.7447 20 10 20Z" fill="#A9AAAC"/>
			<path d="M17.0372 17.1034L10 10H20C20 12.7784 18.8663 15.2913 17.0372 17.1034Z" fill="#768F95"/>
			<path d="M10.0001 0V10L2.96289 2.89656C4.77008 1.10625 7.25539 0 10.0001 0Z" fill="#99827F"/>
			<path d="M2.96281 2.89648L10 9.99992H0C0 7.22148 1.13375 4.70867 2.96281 2.89648Z" fill="#C6A7A2"/>
			<path d="M10.0001 20V10L2.96289 17.1034C4.77008 18.8937 7.25539 20 10.0001 20Z" fill="#F9E7E1"/>
			<path d="M2.96281 17.1034L10 10H0C0 12.7784 1.13375 15.2912 2.96281 17.1034Z" fill="#E4CFCC"/>
		</svg>
	)
}

multiColor.protoTypes = {
	color: PropTypes.string,
	// filled: PropTypes.bool,
}
