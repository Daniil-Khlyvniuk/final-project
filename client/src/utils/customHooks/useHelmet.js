import React from 'react'

const UseSeo = () => {

	const returnCeo = ({lang, title, description, keywords}) => {
		return (
			<>
				<html lang={lang} />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</>
		)
	}

	return {returnCeo}
}

export default UseSeo
