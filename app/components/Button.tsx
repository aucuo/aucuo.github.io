import React from 'react';
import styles from './Button.module.scss';

interface IBaseButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | '';
    size?: 'small' | 'large' | '';
    className?: string;
    disabled?: boolean;
}

// Для кнопки
interface IButtonWithOnClick extends IBaseButtonProps {
    href?: never;
    onClick?: () => void;
}

// Для ссылки
interface ILinkWithHref extends IBaseButtonProps {
    href: string;
    target?: string;
    onClick?: never;
}

type IButtonProps = IButtonWithOnClick | ILinkWithHref;

export default function Button({
                                   children,
                                   variant = '',
                                   size = '',
                                   className = '',
                                   disabled = false,
                                   ...rest
                               }: IButtonProps) {
    const buttonClasses = `
            ${styles.btn}
            ${variant ? styles[`btn--variant-${variant}`] : ''}
            ${size ? styles[`btn--size-${size}`] : ''}
            ${className}
        `.trim();

    if ('href' in rest) {
        const {href, target} = rest as ILinkWithHref;

        return (
            <a
                href={href}
                target={target}
                className={buttonClasses}
                aria-disabled={disabled}
            >
                {children}
            </a>
        );
    }

    // Иначе — обычный <button>
    const {onClick} = rest;
    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}