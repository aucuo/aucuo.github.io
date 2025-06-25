import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';

interface IProps {
    image: string;
    title: string;
    description: string;
    href: string;
    alt?: string;
}

export default function Card({
   image,
   title,
   description,
   href,
   alt
}: IProps) {
    return (
        <article className={styles.card}>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <Image className={styles.card__image} src={image} alt={alt || title} width={592} height={600}/>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
            </a>
        </article>
    );
}