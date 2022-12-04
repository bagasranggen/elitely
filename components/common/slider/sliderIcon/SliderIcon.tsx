import React, {useRef, useState} from 'react';

import chunks from "../../../../libs/chunks";

import {Carousel} from "react-bootstrap";
import Icon from "../../icon/Icon";

export type SliderIconProps = {
    perPage: number;
    className?: string;
    items: Array<any>;
};

const SliderIcon = ({perPage, className, items}: SliderIconProps): React.ReactElement => {
    const meets = chunks(items, perPage);
    const ref = useRef<any>(null)
    const [active, setActive] = useState<number>(0);

    const slidHandler = (active: number, e: any) => {
        const refChildren = ref.current.element.children;
        const prevArrow = refChildren[2];
        const nextArrow = refChildren[3];

        setActive(active);

        console.log(refChildren)
        // console.log(nextArrow.classList)
        console.log(nextArrow)

        switch (active) {
            case 0:
                prevArrow.classList.add('disabled');
                break;

            case meets.length - 1:
                nextArrow.classList.add('disabled');
                break;

            default:
                nextArrow.classList.remove('disabled');
                prevArrow.classList.remove('disabled');
                break;

        }

        // console.log(prevArrow)

        // console.log(ref.current.element.children)
        // console.log(e)
        // if (active === 0) {
        //     document.querySelector()
        // }
    }

    return (
        <Carousel
            ref={ref}
            className={`carousel-icon${className ? ` ${className}` : ''}`}
            interval={null}
            onSlid={slidHandler}
            prevIcon={<i className={`fa-solid fa-chevron-left${active === 0 ? ' disabled' : ''}`} />}
            nextIcon={<i className={`fa-solid fa-chevron-right${active === meets.length - 1 ? ' disabled' : ''}`} />}>
            {meets.map((meet: any, i: number) => (
                <Carousel.Item key={i}>
                    {meet.map((m: any) => (
                        <Icon
                            key={m.description}
                            type='square'
                            iconType='icon'
                            icon={m.icon}
                            title={m.title}>{m.description}</Icon>
                    ))}
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default SliderIcon;