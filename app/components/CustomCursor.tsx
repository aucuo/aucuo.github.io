'use client';

import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.scss';
import clsx from 'clsx';
import { useCursor } from '@/app/context/CursorContext';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const { isCursorVisible, setCursorVisible } = useCursor();

    useEffect(() => {
        // Only show cursor on devices that support hover (i.e., desktops)
        const mediaQuery = window.matchMedia('(hover: hover)');
        if (!mediaQuery.matches) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button')) {
                setIsHovering(false);
            }
        };

        const handleMouseEnter = () => {
            setCursorVisible(true);
        };

        const handleMouseLeave = () => {
            setCursorVisible(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [setCursorVisible]);

    const cursorClasses = clsx(styles.cursor, {
        [styles.hovered]: isHovering,
        [styles.visible]: isCursorVisible,
    });

    const cursorStyle = {
        transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)`,
    };

    return (
        <div className={cursorClasses} style={cursorStyle}>
            <span className={styles.cursor__text}>Click me</span>
        </div>
    );
} 