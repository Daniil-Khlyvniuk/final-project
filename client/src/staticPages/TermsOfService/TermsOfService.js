import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Container, Grid} from '@mui/material'

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
			{data && <Container maxWidth='lg' sx={{mt:'80px'}}>
				<Grid container>
					<Grid item md={2}>
						{

							data.map(item => {
								return <div key={item.pageTitle}>
									<h6>{item.pageTitle}</h6>
									<ul>
										{item.tabs.map(tab => {
											return <li key={tab.tabTitle}>{tab.tabTitle}</li>
										})}
									</ul>
								</div>
							
							}
							)
						}
					</Grid>
					<Grid item md={10}>
						{!loading && data.map((data) => {
							data.tabs.map((item, index) => {
								return <h1 key={index}>Hello!!!</h1>
							})
						})}
					</Grid>
				</Grid>

			</Container>}
		</h1>
	)
}

export default TermsOfService
