import React from 'react';

import SliderPost, {SliderPostProps} from "./sliderPost/SliderPost";
import SliderIcon, {SliderIconProps} from "./sliderIcon/SliderIcon";

export type SliderProps = | ({
    type: 'post';
    className?: never;
    perPage?: never;
} & SliderPostProps) | (
    { type: 'icon' } & SliderIconProps)

const Slider = ({type, perPage, className, items}: SliderProps): React.ReactElement => {
    switch (type) {
        case "post":
            return <SliderPost items={items} />

        case "icon":
            return <SliderIcon
                className={className}
                perPage={perPage}
                items={items} />

    }
};

export default Slider;