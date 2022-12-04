import React from 'react';
import ButtonOutline, {ButtonOutlineConditionalProps, ButtonOutlineProps} from "./buttonOutline/ButtonOutline";

export type ButtonProps = (ButtonOutlineProps & ButtonOutlineConditionalProps);

const Button = ({
                    type,
                    buttonType,
                    color,
                    size,
                    isActive,
                    fullWidth,
                    href,
                    className,
                    onClick,
                    children,
                }: ButtonProps): React.ReactElement => {
    switch (type) {
        case "anchor":
            return <ButtonOutline
                type='anchor'
                href={href}
                color={color}
                isActive={isActive}
                size={size}
                fullWidth={fullWidth}
                onClick={onClick}
                className={className}>{children}</ButtonOutline>

        case "button":
            return <ButtonOutline
                type='button'
                buttonType={buttonType}
                color={color}
                size={size}
                fullWidth={fullWidth}
                isActive={isActive}
                onClick={onClick}
                className={className}>{children}
            </ButtonOutline>
    }
}

export default Button;