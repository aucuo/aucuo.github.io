import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

// All props of a <button> except 'className' which we will handle.
type TButtonProps = Omit<React.ComponentProps<'button'>, 'className'> & {
    href?: never;
    variant?: 'primary' | 'secondary' | 'transparent';
    size?: 'small' | 'large';
    className?: string;
};

// All props of an <a> except 'className'. We also add 'disabled' for our custom handling.
type TLinkProps = Omit<React.ComponentProps<'a'>, 'className'> & {
    href: string;
    variant?: 'primary' | 'secondary' | 'transparent';
    size?: 'small' | 'large';
    className?: string;
    disabled?: boolean;
};

type IButtonProps = TButtonProps | TLinkProps;

export default function Button({
   children,
   variant,
   size,
   className,
   ...props
}: IButtonProps) {
    const buttonClasses = clsx(
        styles.btn,
        variant && styles[`btn--variant-${variant}`],
        size && styles[`btn--size-${size}`],
        className
    );

    // Type guard: if 'href' is present, it's a link.
    if ('href' in props) {
        // For links, 'disabled' is not a native attribute.
        // We use 'aria-disabled' for accessibility and prevent clicks.
        const { disabled, ...linkProps } = props;

        return (
            <a
                {...linkProps}
                className={buttonClasses}
                aria-disabled={disabled}
                onClick={disabled ? (e) => e.preventDefault() : props.onClick}
            >
                {children}
            </a>
        );
    }

    // Otherwise, it's a button. The 'disabled' attribute works natively.
    return (
        <button
            {...props}
            className={buttonClasses}
        >
            {children}
        </button>
    );
}