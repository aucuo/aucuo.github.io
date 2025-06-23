import React from 'react';
import styles from './Card.module.scss';

interface IProps {
    image: string;
    title: string;
    description: string;
}

export default function Card({
                                  image,
                                  title,
                                  description
                              }: IProps) {
    return (
        <div className={styles.card}>
            <a href="#">
                <img className={styles.card__image} src={image} alt="Project photo" width={592} height={600}/>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
            </a>
        </div>
    );
}