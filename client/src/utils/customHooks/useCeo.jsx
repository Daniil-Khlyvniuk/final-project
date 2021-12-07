import React from 'react'
import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'


const UseCeo = ({
	lang = 'en',
	title,
	description = 'page description',
	keywords = 'bedroom, Kitchen, Loungewear, bedding store, luxury bedding sets, king size bedspreads, king bed sheets, comforters on sale',
}) => {
	return (
		<Helmet>
			<html lang={lang} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Helmet>
	)
}

UseCeo.propTypes = {
	lang: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
}

export default UseCeo
