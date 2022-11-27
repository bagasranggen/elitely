import React from 'react';
import {Col, Row, Table} from "react-bootstrap";

import Icon from "../../icon/Icon";

import education from '../../../../assets/images/education.svg'
import work from '../../../../assets/images/work.svg'
import CardSummary, {CardSummaryProps} from "../cardSummary/CardSummary";

export type CardInfoProps = {} & CardSummaryProps;

const CardInfo = ({title, education, work, children}: CardInfoProps): React.ReactElement => (
    <CardSummary
        title={title}
        education={education}
        work={work}>
        {children}
    </CardSummary>
);


export default CardInfo;