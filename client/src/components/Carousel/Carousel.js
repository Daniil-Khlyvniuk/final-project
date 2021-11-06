import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-fade/effect-fade.min.css'
import { useStyleCarousel } from './useStyleCarousel'
// import Button from '@mui/material/Button'

const slideData = [
	{
		id: '1',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://marieclairehome.com.ua/assets/images/products/868/800x/postilna-bilyzna-marie-claire-innsbruck.jpg',
		title: 'OCEAN  COLLECTION',
		description: 'Do not miss our hot offer. Promotion ends 10/30/2019',
		category: '5d99f68e419d040eec0f722c'
	},
	{
		id: '2',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://shuhlyadka.com.ua/image/cache/catalog/Aran%20Clasy/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%20%D1%81%D0%B0%D1%82%D0%B8%D0%BD%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F%20%D0%B5%D0%B2%D1%80%D0%BE%20Aran%20Clasy%20Adra%20v1-800x800.jpg',
		description: 'SUBSCRIBE NOW AND GET 15% OFF ON YOUR FIRST ORDER',
		category: '5d99f68e419d040eec0f722c'
	},{
		id: '3',
		customId: 'promotion-women-clothing',
		imageUrl: 'https://images.ua.prom.st/1783929320_postelnoe-bele-satin.jpg',
		description: 'UP TO 30% OFF ON YOUR FAVOURITE FRENCH LINEN',
		category: '5d99f68e419d040eec0f722c'
	},
]

const Carousel = () => {
	const next = useRef()
	const prev = useRef()
	const style = useStyleCarousel()
	return (
		<div className={style.pagination}>
			<Swiper
				modules={[Navigation, Pagination, EffectFade]}
				slidesPerView={1}
				effect="fade"
				loop="true"
				autoHeight='true'
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next'
				}}
				pagination={{
					clickable: true,
				}}
				scrollbar={{ draggable: true }}
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
							<img style={{alignText: 'center'}} className={style.slide} src={slide.imageUrl} alt=""/>
							<div className={style.textBlock}>
								{
									slide.title &&
										<div>
											<p className={style.title}>{slide.title}</p>
											<p className={style.desc}>{slide.description}</p>
										</div>
								}
								{!slide.title &&
								<p className={style.desc} style={{fontSize:'32px', lineHeight: '32px'}}>{slide.description}</p>
								}
								{/*<Button className={style.shopBtn} variant="contained">SHOP NEW ARRIVALS</Button>*/}
								<button className={style.shopBtn}>SHOP NEW ARRIVALS</button>
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
	)
}

export default Carousel