import React from 'react'
import styles from './Card.module.scss'

// eslint-disable-next-line react/prop-types
const Card = ({image, title, price}) => {
	return (
		<div className={styles.container}>
			<img className={styles.img} src={image} alt='img'/>
			<div className={styles.textContainer}>
				<p className={styles.title}>{title}</p>
				<span className={styles.price}>{price}</span>
			</div>
		</div>
	)
}

export default Card