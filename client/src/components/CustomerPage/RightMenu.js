import React from 'react'
import AccordionProduct from '../ProductDescription/Accordion/Accordion'
import {Divider} from '@mui/material'


// eslint-disable-next-line react/prop-types
const RightMenu = ({tabs}) => {

	// eslint-disable-next-line no-console
	console.log(tabs)
	// // eslint-disable-next-line no-unused-vars
	// const [titles , setTitles] = useState(null)
	// // eslint-disable-next-line no-unused-vars
	// const [tab, setTabs] = useState(null)
	// // eslint-disable-next-line no-unused-vars
	// const [loading, setLoading] = useState(false)
	//
	// useEffect(() => {
	// 	setLoading(true)
	// 	// eslint-disable-next-line react/prop-types
	// 	const titles = tabs.map(tab => tab.tabTitle)
	// 	// eslint-disable-next-line no-console
	// 	console.log(titles)
	// 	setTitles(titles)
	// 	// eslint-disable-next-line react/prop-types
	// 	const acardions = tabs.map(tab=> {
	// 		// eslint-disable-next-line no-console
	// 		if(tab.subject){
	// 			console.log('tabs ---', tab.subject  )
	// 			tab.subject.map(i => console.log('title---' , i.title ))
	// 		}

	//
	// 	})
	// 	// eslint-disable-next-line no-console
	// 	console.log('Hello ' + acardions)
	// 	// const l = acardions?.map(i => i?.title)
	// 	// // eslint-disable-next-line no-console
	// 	// console.log('Hello' + l)
	//
	// }, [])

	return (
		<div>
			{/* eslint-disable-next-line react/prop-types */}
			{tabs && tabs.map(tab => {
				return (
					<>
						<p key={tab.tabTitle}>{!!tab.subject && tab.tabTitle}</p>
						{!!tab.subject && <Divider/>}
						{
							tab.subject &&
					tab.subject.map(item => {
						return (
							<>
								<AccordionProduct key={item.title} 
									accordionTitle={item?.description ?item.title : null}
									description={item.description}/>
								{item?.description ? <Divider/> : null}
							</>)
					})
						}
					</>
				)
			})}
		</div>
	)
}

export default RightMenu