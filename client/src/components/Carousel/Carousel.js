import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useStyleCarousel } from '../../utils/customHooks/useStyleCarousel'

const Carousel = ({
	slides,
	main,
	product = false,
	related = false  }) => {
	const style = useStyleCarousel()
	const [nav1, setNav1] = useState()
	const [nav2, setNav2] = useState()
	const slider = useRef()
	const thumbs = useRef()


	useEffect(() => {
		setNav1(slider.current)
		setNav2(thumbs.current)
	}, [])


	const SampleNextArrow = (props) => {
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

	const  SamplePrevArrow = (props) => {
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

	const settingsMain = {
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow/>,
		prevArrow: <SamplePrevArrow/>,
	}
	const settingRelated = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		initialSlide: 1,
		arrows: true,
		nextArrow: <SampleNextArrow/>,
		prevArrow: <SamplePrevArrow/>,
	}
	const settingsProducts = {
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: true,
		nextArrow: <SampleNextArrow/>,
		prevArrow: <SamplePrevArrow/>,
	}
	const settingThumbs = {
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		centerMode: true,
		focusOnSelect: true,
	}


	return (
		<>
			{main &&
			<Slider
				{...settingsMain}
				className={style.show}
			>
				{slides?.map((slide) => {
					return (
						<div key={slide.customId} className={style.slideContainer}>
							<img src={slide.imageUrl} className={style.slide} alt=""/>
							<div className={style.textBlock}>
								<p className={style.title}>{slide.title}</p>
								{slide.description &&
								<p className={style.desc}>{slide.description}</p>}
							</div>
						</div>
					)
				})}
			</Slider>
			}

			{product &&
				<>
					<div style={{width: '50%'}}>
						<Slider
							{...settingsProducts}
							asNavFor={nav2}
							ref={slider}
						>
							{slides?.map((slide) => {
								return (
									<div key={slide.customId} className={style.slideContainer}>
										<img src={slide.imageUrl} className={style.slide} alt=""/>
									</div>
								)
							})}
						</Slider>
						<Slider
							{...settingThumbs}
							asNavFor={nav1}
							ref={thumbs}
							className={style.thumbWrapper}
						>
							{slides?.map((slide) => {
								return (
									<div key={slide.customId}>
										<img src={slide.imageUrl} className={style.thumb} alt=""/>
									</div>
								)
							})}
						</Slider>
					</div>
				</>
			}

			{related &&
				<>
					<h3 className={style.relatedTitle}>RELATED ITEMS</h3>
					<Slider
						{...settingRelated}>
						{slides?.map((slide) => {
							return (
								<div key={slide.customId}>
									<img src={slide.imageUrl} className={style.thumb} alt=""/>
								</div>
							)
						})}
					</Slider>
				</>
			}
		</>
	)
}

Carousel.propTypes = {
	isLoading: PropTypes.bool,
	slides: PropTypes.array,
	main: PropTypes.bool,
	related: PropTypes.bool,
	product: PropTypes.bool,
	className: PropTypes.string,
	onClick: PropTypes.func
}

export default Carousel