import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		customPaging: () => (
			<div
				style={{
					width: '30px',
					marginLeft: '55px',
					color: 'black',
					border: '1px blue solid'
				}}
			>
			</div>
		)
	}

	const carousel = useRef()

	// eslint-disable-next-line no-console
	console.log(carousel)
	const slidesData = [
		{
			id: 1,
			title: 'repellendus id ullam',
			label: 'Dolorem officiis temporibus.'
		}, {
			id: 2,
			title: 'excepturi consequatur est',
			label: 'Officia non provident dolor esse et neque.'
		}, {
			id: 3,
			title: 'eius doloribus blanditiis',
			label: 'Ut recusandae vel vitae molestiae id soluta.'
		},
	]

	return (
		<div className="slider-wrapper">
			{/*<button onClick={() => carousel.current.slickGoTo(0)}>Go to start*/}
			{/*</button>*/}
			{/*<button onClick={() => carousel.current.slickGoTo(slidesData.length - 1)}>*/}
			{/*	*/}
			{/*</button>*/}
			<Slider {...settings}>
				{slidesData.map((slide) =>
					<div className="slick-slide" key={slide.id}>
						<h2 className="slick-slide-title">{slide.title}</h2>
						<img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
						<label className="slick-slide-label">{slide.label}</label>
					</div>
				)}

			</Slider>
		</div>

	)
}

export default Carousel