import React from 'react';
import {Col, Row} from "react-bootstrap";

import Icon from "../../icon/Icon";

import EducationImage from "../../../../assets/images/education.svg";
import WorkImage from "../../../../assets/images/work.svg";

export type CardSummaryProps = {
    title: string;
    education: string;
    work: string;
    post?: React.ReactNode;
    children: React.ReactNode;
};

const CardSummary = ({title, education, work, post, children}: CardSummaryProps): React.ReactElement => (
    <>
        {post}
        <h3 className='card-info__title'>{title}</h3>
        <Row>
            {education ? (
                <Col xs='auto'>
                    <Icon
                        type='circle'
                        iconType="svg"
                        icon={<EducationImage />}>{education}</Icon>
                </Col>
            ) : null}
            {work ? (<Col xs='auto'>
                <Icon
                    type='circle'
                    iconType='svg'
                    icon={<WorkImage />}>{work}</Icon>
            </Col>) : null}
        </Row>
        <hr />
        {children}
    </>
);

export default CardSummary;