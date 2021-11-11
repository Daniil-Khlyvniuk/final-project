import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-fade/effect-fade.min.css'
import { useStyleCarousel } from '../../utils/customHooks/useStyleCarousel'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {slidesOperations, slidesSelectors} from '../../store/Slider'
// import Button from '@mui/material/Button'
SwiperCore.use([Thumbs])

const Carousel = ({ isProduct = true }) => {
	const prev = useRef()
	const next = useRef()
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const slides = useSelector(slidesSelectors.getSlides())
	// eslint-disable-next-line no-console
	console.log('NACHALO ---',slides)
	// const error = useSelector(slidesSelectors.getError())
	// const isLoading = useSelector(slidesSelectors.getError())


	const dispatch = useDispatch()

	// let slideData = [
	// 	{
	// 		customId: 'blue-ocean-promo',
	// 		date: '2021-11-10T13:50:18.501Z',
	// 		description: 'This is the luxury bedding set with absolutely everything in it, at a price that won\'t keep you up at night.',
	// 		imageUrl: 'upload/images/slide/7acdf1e3-9bb0-49b3-9a92-d2bb8bdacf14.jpg',
	// 		title: 'blue ocean',
	// 		__v: 0,
	// 		_id: '618bce1a59a1f92cd099a3d3',
	// 	},
	// 	{
	// 		customId: 'first-order-fee',
	// 		date: '2021-11-10T13:52:29.743Z',
	// 		imageUrl: 'upload/images/slide/cf934b23-78c9-49e9-b9d4-969feaf6142f.jpg',
	// 		title: 'subscribe and get 15% off your first order',
	// 		__v: 0,
	// 		_id: '618bce9d59a1f92cd099a3d7',
	// 	},
	// 	{
	// 		customId: 'linen-off-30',
	// 		date: '2021-11-10T13:55:42.215Z',
	// 		imageUrl: 'upload/images/slide/03824058-eef6-4ade-b016-1c9a1161d361.jpg',
	// 		title: 'up to 30% off on your favorite french linen',
	// 		__v: 0,
	// 		_id: '618bcf5e59a1f92cd099a3da',
	// 	}
	// ]

	const getSetting = (isThumbs) => {
		return {
			effect: 'fade',
			DisableOnInteraction: 'false',
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			},
			...(!isThumbs && {
				pagination: {
					clickable: true,
				}
			}),
		}
	}
	const setting = getSetting(isProduct)

	useEffect( () =>  {
		dispatch(slidesOperations.fetchSliders())
	}, [dispatch])


	// eslint-disable-next-line no-console
	console.log(slides)
	const style = useStyleCarousel()
	return (
		<>
			<div className={style.pagination}>
				<Swiper
					onSwiper={(swiper)=>{
						setThumbsSwiper(swiper)
					}}
					onSlideChange={(swiper)=>{
						// eslint-disable-next-line no-console
						swiper.init()
						swiper.update()
					}}
					modules={[Navigation, Pagination, EffectFade]}
					slidesPerView={1}
					loop={true}
					{...setting}
				>
					{slides  (slides.map((slide) => {
						return <SwiperSlide key={slide._id}>
							<div>
								{/*<Link to={`/${slide.category}`}>*/}
								<img style={{ alignText: 'center' }} className={style.slide} src={slide.imageUrl} alt="slide"/>
								{/*</Link>*/}
								<div className={style.textBlock}>

									{(slide.title && slide.description) &&
									<div>
										<p className={style.title}>{slide.title}</p>
										<p className={style.desc}>{slide.description}</p>
									</div>}

									{(slide.title && !slide.description) &&
									<p className={style.desc} style={{ fontSize: '32px', lineHeight: '32px' }}>{slide.title}</p>
									}
									{/* eslint-disable-next-line max-len */}
									{(slide.title || slide.description) && <button className={style.shopBtn}>SHOP NEW ARRIVALS</button>}
								</div>
							</div>
							<div ref={next}
								className={` swiper-button-next ${style.nextEl}`}>
								<div className={style.arrowRight}></div>
							</div>
							<div ref={prev} className={`swiper-button-prev ${style.prevEl}`}>
								<div className={style.arrowLeft}></div>
							</div>
						</SwiperSlide>
					}))}
				</Swiper>
			</div>
			{isProduct &&
			<Swiper
				className={style.thumbWrapper}
				thumbs={{
					swiper:thumbsSwiper
				}}
				slidesPerView={2}
				spaceBetween={'-23%'}
				centeredSlides={true}
				slideToClickedSlide={true}>
				{slides.map((thumb) => {
					return <SwiperSlide key={thumb.id} className={style.thumb}>
						<img style={{ width: '60%', height: ' 60%' }} src={thumb.imageUrl} alt="slide thumbs"/>
					</SwiperSlide>
				})}
			</Swiper>
			}
		</>
	)
}

Carousel.propTypes = {
	isProduct: PropTypes.bool
}

export default Carousel