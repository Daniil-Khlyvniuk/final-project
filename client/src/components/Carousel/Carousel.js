import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useStyleCarousel } from '../../utils/customHooks/useStyleCarousel'

const Carousel = ({ slides }) => {
	const style = useStyleCarousel()

	// eslint-disable-next-line func-style
	function SampleNextArrow(props) {
		const { className, onClick } = props
		return (
			<div className={style.nextEl}>
				<div
					className={className + style.nextEl}
					style={{
						width: '25px',
						height: '25px',
						borderTop: '2px solid #5C5E60',
						borderRight: '2px solid #5C5E60',
						transform: 'rotate(45deg)' }}
					onClick={onClick}
				/>
			</div>
		)
	}
	// eslint-disable-next-line func-style
	function SamplePrevArrow(props) {
		const { className, onClick } = props
		return (
			<div className={style.prevEl}>
				<div
					className={className + style.prevEl}
					style={{
						width: '25px',
						height: '25px',
						borderTop: '2px solid #5C5E60',
						borderRight: '2px solid #5C5E60',
						transform: 'rotate(-135deg)' }}
					onClick={onClick}
				/>
			</div>
		)
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow/>,
		prevArrow: <SamplePrevArrow/>,
	}
	return (
		<Slider {...settings}>
			{slides.map((slide)=>{
				return (
					<div key={slide.customId} >
						<img src={slide.imageUrl} className={style.slide} alt=""/>
					</div>
				)
			})}
		</Slider>
	)
}

Carousel.propTypes = {
	// isProduct: PropTypes.bool,
	slides: PropTypes.array,
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
}

export default Carousel