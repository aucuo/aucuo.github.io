import React from 'react';
import styles from './Badge.module.scss';

interface IProps {
    children: React.ReactNode;
}

export default function Badge({
                                   children
                               }: IProps) {
    return (
        <span className={styles.badge}>
            {children}
        </span>
    );
}