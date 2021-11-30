import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LeftMenu from '../../components/CustomerPage/LeftMenu'
import RightMenu from '../../components/CustomerPage/RightMenu'
import {Container, Grid} from '@mui/material'
import Loader from '../../components/UI/Loader/Loader'



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
		<Container>
			{loading && <Loader/>}
			{data &&
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
			}
		</Container>
	)
}

export default TermsOfService
