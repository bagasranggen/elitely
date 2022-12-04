import React from 'react';
import Image from "next/image";

import {Carousel} from "react-bootstrap";

export type SliderPostProps = {
    items: Array<any>;
};

const SliderPost = ({items}: SliderPostProps): React.ReactElement => (
    <Carousel
        className='carousel-post'
        controls={false}>
        {items.map((item: any) => (
            <Carousel.Item key={item.alt}>
                <div className="image-container">
                    <Image
                        src={item.src}
                        width={item.width}
                        height={item.height}
                        alt={item.alt} />
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
);

export default SliderPost;