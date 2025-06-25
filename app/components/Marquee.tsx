import React from 'react';
import styles from './Marquee.module.scss';
import clsx from 'clsx';

export interface IMarqueeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Marquee({
   children,
   className,
}: IMarqueeProps) {
    return (
        <div className={clsx(styles.marquee, className)}>
            <div className={styles.marquee__track}>
                <div className={styles.marquee__content}>{children}</div>
                <div className={styles.marquee__content} aria-hidden="true">{children}</div>
            </div>
        </div>
    );
}