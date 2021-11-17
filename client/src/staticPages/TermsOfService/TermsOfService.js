import React, {useEffect, useState} from 'react'
import axios from 'axios'

const TermsOfService = () => {
	const [data, setData] = useState(null)
	const [loading , setLoading]= useState(false)

	useEffect(() => {
		setLoading(true)
		axios('../termsofservice.json')
			.then(r => {
				setData(r.data)
				setLoading(false)
			})
	}, [])
	return (

		<h1>
			TermsOfService
			{loading && <p>Loading</p>}
			{data && <p>Data found!</p>}
		</h1>
	)
}

export default TermsOfService
