import React, {useRef} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-fade/effect-fade.min.css'
import { useStyleCarousel } from './useStyleCarousel'

const slideData = [
	{
		id: '1',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/313340/ss_9f74ee916294bb39a9fb0269369b36a3c5495462.1920x1080.jpg',
		title: 'OCEAN  COLLECTION',
		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '2',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://media.cntraveler.com/photos/5a009c8e25be133d871c008e/16:9/w_1280,c_limit/Mountain-Travel_GettyImages-503689316.jpg',
		description: 'SUBSCRIBE NOW AND GET 15% OFF ON YOUR FIRST ORDER',
		category: '5d99f68e419d040eec0f722c'
	},
]

const Carousel = () => {
	const next = useRef()
	const prev = useRef()
	const style = useStyleCarousel()
	return (
		<Swiper
			modules={[Navigation, Pagination, EffectFade]}
			spaceBetween={50}
			slidesPerView={1}
			effect="fade"
			loop="true"
			observer="true"
			observeParents="true"
			observeSlideChildren= 'true'
			// navigation
			navigation = {{
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			}}
			pagination={{
				clickable: true,
			}}
			scrollbar={{ draggable: true }}
			onSlideChange={(swiper) => {
				/* eslint-disable-next-line no-console */
				console.log(swiper)
			}}
			onSwiper={(swiper) => {
				swiper.navigation.destroy()
				swiper.navigation.init()
				swiper.navigation.$prevEl = prev.current
				swiper.navigation.prevEl = style.prevEl
				swiper.navigation.$nextEl = next.current
				swiper.navigation.nextEl = style.nextEl
				swiper.navigation.update()
			}}
		>
			{slideData.map((slide) => {
				return <SwiperSlide key={slide.id}>
					<div>
						<img className={style.slide} src={slide.imageUrl} alt=""/>
						<div className={style.textBlock}>
							{slide.title && <p className={style.title}>{slide.title}</p>}
							<p className={style.desc}>{slide.description}</p>
							<button className={style.shopBtn}>SHOP NEW ARRIVALS</button>
						</div>
					</div>



					<div ref={next} className={` swiper-button-next ${style.nextEl}`}>
						<div className={style.arrowRight} ></div>
					</div>

					<div ref={prev} className={`swiper-button-prev ${style.prevEl}`}>
						<div className={style.arrowLeft}></div>
					</div>

				</SwiperSlide>
			})}
		</Swiper>
	)
}

export default Carousel