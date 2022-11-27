import React from 'react';
import {Row, Col} from "react-bootstrap";
import Image from "next/image";

export type IconSquareProps = {
    icon: string;
    iconType: 'image' | 'icon';
    title: string;
    children: React.ReactNode;
};

const IconSquare = ({icon, iconType, title, children}: IconSquareProps): React.ReactElement => (
    <Row className="gx-1 icon-square">
        <Col xs='auto'>
            <div className="icon-square__icon">
                {iconType === 'image' ? <Image
                    src={icon}
                    alt={icon} /> : <i className={icon} />}
            </div>
        </Col>
        <Col>
            <div className="icon-square__text">
                <h3>{title}</h3>
                <p className='mb-0'>{children}</p>
            </div>
        </Col>
    </Row>
);

export default IconSquare;