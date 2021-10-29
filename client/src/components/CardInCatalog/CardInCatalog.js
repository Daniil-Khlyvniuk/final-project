import React from 'react';
import styles from "./CardInCatalog.module.scss";

const CardInCatalog = ({title, image, price}) => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.img} src={image} alt='img'/>
                <p className={styles.catalogTitle}>{title}</p>
                <div className={styles.blockHover}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>{price}</p>
                    <button className={styles.btn}>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default CardInCatalog;