import React from 'react';
import Link from "next/link";

export type ButtonOutlineProps = {
    classNames?: string;
    color: 'light' | 'light-dark' | 'primary' | 'secondary';
    isActive?: boolean;
    size: 'sm' | 'md';
    fullWidth?: boolean;
    children: React.ReactNode;
};

export type ButtonOutlineConditionalProps = | {
    type: 'button';
    buttonType: 'submit' | 'button' | 'reset';
    href?: never;
} | {
    type: 'anchor';
    buttonType?: never;
    href: string;
}

const ButtonOutline = ({
                           type,
                           buttonType,
                           href,
                           classNames,
                           color,
                           isActive,
                           size,
                           fullWidth,
                           children
                       }: ButtonOutlineProps & ButtonOutlineConditionalProps): React.ReactElement => {
    let btn;
    const btnClass = `btn btn-outline btn-outline--${color} btn-outline--${size}${isActive ? ' btn-outline--active' : ''}`
    const btnGroupClass = `btn-group${fullWidth ? ' w-100' : ''}${classNames ? ` ${classNames}` : ''}`;

    switch (type) {
        case "anchor":
            btn = <Link
                className={btnClass}
                href={href}>{children}</Link>
            break;

        case "button":
            btn = <button
                type={buttonType}
                className={btnClass}>{children}</button>
            break;
    }

    return <div className={btnGroupClass}>{btn}</div>
};

export default ButtonOutline;