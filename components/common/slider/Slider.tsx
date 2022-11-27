import React from 'react';

// import Slider from "react-slick";
import Image from "next/image";
import {it} from "node:test";
import {Carousel} from 'react-bootstrap';

export type SliderProps = {
    items: Array<any>;
};

const Slider = ({items}: SliderProps): React.ReactElement => {
    return (
        <Carousel>
            {items.map((item: any) => (
                <Carousel.Item key={item.alt}>
                    <div className="image-container">
                        <Image
                            src={item.src}
                            width={item.width}
                            height={item.height}
                            alt={item.alt}
                            // objectFit='contain'
                            // fill
                            // className="d-block w-100"
                            // src="holder.js/800x400?text=First slide&bg=373940"
                            // alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            ))}
            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="holder.js/800x400?text=Second slide&bg=282c34"*/}
            {/*        alt="Second slide"*/}
            {/*    />*/}
            {/*</Carousel.Item>*/}
            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="holder.js/800x400?text=Third slide&bg=20232a"*/}
            {/*        alt="Third slide"*/}
            {/*    />*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    )
};

export default Slider;