import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import Loader from '../UI/Loader/Loader'

const Scroll = () => {
	const [elem, setElem] = useState([])
	const [nextPage, setNextPage] = useState(1)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		axios(`https://jsonplaceholder.typicode.com/photos?_limit=10?_page=${nextPage}`)
			.then(res => {
				setElem([...elem, ...res.data])
				setIsLoading(false)
			}
			)

	}, [nextPage])

	return (
		<>
			<InfiniteScroll
				dataLength={elem.length}
				next={() => {
					setNextPage(nextPage + 1)
				}}
				hasMore={true}>
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>That`s all, folks!</b>
					</p>
				}
				{elem.map((el, index) => {
					return (
						<div key={index} style={{ textAlign: 'center' }}>
							<img src={el.thumbnailUrl} alt=""/>
							<p>{el.title}</p>
						</div>
					)
				})}
			</InfiniteScroll>
			{isLoading && <div style={{textAlign: 'center'}}><Loader/></div>}
		</>
	)
}

export default Scroll