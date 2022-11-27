import React from 'react';
import ButtonOutline, {ButtonOutlineConditionalProps, ButtonOutlineProps} from "./buttonOutline/ButtonOutline";

export type ButtonProps = (ButtonOutlineProps & ButtonOutlineConditionalProps);

const Button = ({
                    type,
                    buttonType,
                    color,
                    size,
                    fullWidth,
                    href,
                    classNames,
                    children
                }: ButtonProps): React.ReactElement => {
    switch (type) {
        case "anchor":
            return <ButtonOutline
                type='anchor'
                href={href}
                color={color}
                size={size}
                fullWidth={fullWidth}
                classNames={classNames}>{children}</ButtonOutline>

        case "button":
            return <ButtonOutline
                type='button'
                buttonType={buttonType}
                color={color}
                size={size}
                fullWidth={fullWidth}
                classNames={classNames}>{children}
            </ButtonOutline>
    }
}

export default Button;