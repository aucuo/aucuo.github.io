import React from 'react';
import styles from './Marquee.module.scss';

export interface IMarqueeProps {
    text: string;
    className?: string;
}

export default function Marquee({
                                    text = "let's make web better",
                                    className = '',
                                }: IMarqueeProps) {
    return (
        <div className={`${styles.marquee} ${className}`}>
            <div className={styles.marquee__track}>
                <span className={styles.marquee__content}>{text}</span>
                <span className={styles.marquee__content} aria-hidden="true">{text}</span>
            </div>
        </div>
    );
}