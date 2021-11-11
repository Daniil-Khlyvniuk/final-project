import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-fade/effect-fade.min.css'
import { useStyleCarousel } from '../../utils/customHooks/useStyleCarousel'
import axios from 'axios'
import PropTypes from 'prop-types'
// import Button from '@mui/material/Button'
SwiperCore.use([Thumbs])

let thumbsData = [
	{
		id: '1',
		url: 'img/slides/slider-1.jpg'
	}, {
		id: '2',
		url: 'img/slides/slider-2.jpg'
	}, {
		id: '3',
		url: 'img/slides/slider-3.jpg'
	},
]
let error

const Carousel = ({ isProduct = false }) => {
	const prev = useRef()
	const next = useRef()
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [slideData, setSlideData] = useState([])
	const getSetting = (isThumbs) => {
		return {
			effect: 'fade',
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			},
			...(!isThumbs && {
				pagination: {
					clickable: true,
				}
			}),
			...(isThumbs && {
			}),
		}
	}
	const setting = getSetting(isProduct)
	useEffect( () =>  {
		axios.get('api/slides')
			.then((slides) => {
				if (slides.data.length !== 0) {
					setSlideData([...slides.data])
				}
			}
			)
			.catch(err => {
				error = err.message
				// eslint-disable-next-line no-console
				console.log(error)
			})
	}, [])

	const style = useStyleCarousel()
	return (
		<>
			<div className={style.pagination}>
				<Swiper
					onSwiper={setThumbsSwiper}
					modules={[Navigation, Pagination, EffectFade]}
					slidesPerView={1}
					loop={true}
					{...setting}
				>
					{slideData.map((slide) => {
						return <SwiperSlide key={slide.customId}>
							<div>
								{/*<Link to={`/${slide.category}`}>*/}
								<img style={{ alignText: 'center' }} className={style.slide} src={slide.imageUrl} alt="slide"/>
								{/*</Link>*/}
								<div className={style.textBlock}>

									{slide.title &&
									// eslint-disable-next-line max-len
									<div><p className={style.title}>{slide.title}</p><p className={style.desc}>{slide.description}</p>
									</div>}

									{(!slide.title && slide.description) &&
									<p className={style.desc} style={{ fontSize: '32px', lineHeight: '32px' }}>{slide.description}</p>
									}
									{/* eslint-disable-next-line max-len */}
									{(slide.title || slide.description) && <button className={style.shopBtn}>SHOP NEW ARRIVALS</button>}
								</div>
							</div>
							<div ref={next} className={` swiper-button-next ${style.nextEl}`}>
								<div className={style.arrowRight}></div>
							</div>
							<div ref={prev} className={`swiper-button-prev ${style.prevEl}`}>
								<div className={style.arrowLeft}></div>
							</div>
						</SwiperSlide>
					})}
				</Swiper>
			</div>
			{/*{isProduct &&*/}
			<Swiper
				className={style.thumbWrapper}
				thumbs={{
					swiper:thumbsSwiper
				}}
				slidesPerView={2}
				centeredSlides={true}
				slideToClickedSlide={true}>
				{thumbsData.map((thumb) => {
					return <SwiperSlide key={thumb.id} className={style.thumb}>
						<img style={{ width: '200px', height: ' 200px' }} src={thumb.url} alt="slide thumbs"/>
					</SwiperSlide>
				})}
			</Swiper>
			{/*}*/}
		</>
	)
}

Carousel.propTypes = {
	isProduct: PropTypes.bool
}

export default Carousel