import React from 'react';

import IconCircle, {IconCircleProps} from "./iconCircle/IconCircle";
import IconSquare, {IconSquareProps} from "./iconSquare/IconSquare";

export type IconProps = | ({
    type: 'circle';
    title?: never;
} & IconCircleProps) | ({
    type: 'square';
} & IconSquareProps)

const Icon = ({type, icon, iconType, title, children}: IconProps): React.ReactElement => {
    switch (type) {
        case "circle":
            return <IconCircle
                iconType={iconType}
                icon={icon}>{children}</IconCircle>;

        case "square":
            return <IconSquare
                iconType={iconType}
                icon={icon}
                title={title}>{children}</IconSquare>
    }
}

export default Icon;