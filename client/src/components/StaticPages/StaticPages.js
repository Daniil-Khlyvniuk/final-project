import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../UI/Loader/Loader'
import { Container, Grid } from '@mui/material'
import LeftMenu from '../CustomerPage/LeftMenu'
import RightMenu from '../CustomerPage/RightMenu'
import { useLocation } from 'react-router-dom'

const StaticPages = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)

	const { pathname } = useLocation()
	const page = pathname
		.split('/')
		.pop()

	useEffect(() => {
		axios(`/api/pages/${page}`)
			.then(r => {
				setData(r.data)
				setLoading(false)
			})
	}, [page])
	return (
		<Container>
			{loading && <Loader/>}
			{data &&
					<Grid container spacing={1} sx={{marginTop:{xs:'10px', md:'90px'}}}>
						<Grid item
							md={3} sx={{margin:{xs:'0 auto'}}}>
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

export default StaticPages