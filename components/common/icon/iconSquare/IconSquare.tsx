import React from 'react';
import {Row, Col} from "react-bootstrap";

export type IconSquareProps = {
    icon: string;
    title: string;
    children: React.ReactNode;
};

const IconSquare = ({icon, title, children}: IconSquareProps): React.ReactElement => (
    <Row className="gx-1 icon-square">
        <Col xs='auto'>
            <div className="icon-square__icon">
                <i className={icon} />
            </div>
        </Col>
        <Col>
            <div className="icon-square__text">
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </Col>
    </Row>
);

export default IconSquare;