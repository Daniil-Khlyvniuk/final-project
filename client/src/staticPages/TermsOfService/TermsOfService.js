import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LeftMenu from '../../components/CustomerPage/LeftMenu'
import RightMenu from '../../components/CustomerPage/RightMenu'
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
			{loading && <p>Loading</p>}
			{data &&
				<Container>
					<Grid container spacing={1} sx={{marginTop:{xs:'10px', md:'90px'}}}>
						<Grid item
							md={3} sx={{margin:{xs:'0 auto'}}}
						>
							<LeftMenu data={data}/>
						</Grid>
						<Grid item md={9}>
							<RightMenu tabs={data.tabs}/>
						</Grid>
					</Grid>
				</Container>
			}
		</h1>
	)
}

export default TermsOfService
