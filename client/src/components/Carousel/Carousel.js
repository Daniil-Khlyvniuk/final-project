import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.min.css'
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
		title: 'Something text',
		description: 'Do not miss our hot offer. Promotion ends 22/30/2021',
		category: '5d99f68e419d040eec0f722c'
	},
]

const Carousel = () => {
	const style = useStyleCarousel()
	return (
		<Swiper
			modules={[Navigation, Pagination, EffectFade]}
			spaceBetween={50}
			slidesPerView={1}
			effect="fade"
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			/* eslint-disable-next-line no-console */
			onSlideChange={() => console.log('slide change')}
			/* eslint-disable-next-line no-console */
			onSwiper={(swiper) => console.log(swiper)}
		>
			{slideData.map((slide) => {
				return <SwiperSlide key={slide.id}>
					<div>
						<img className={style.slide} src={slide.imageUrl} alt=""/>
						<div className={style.textBlock}>
							<p className={style.title}>{slide.title}</p>
							<p className={style.desc}>{slide.description}</p>
							<button className={style.shopBtn}>SHOP NEW ARRIVALS</button>
						</div>
					</div>
				</SwiperSlide>
			})}
		</Swiper>
	)
}

export default Carousel