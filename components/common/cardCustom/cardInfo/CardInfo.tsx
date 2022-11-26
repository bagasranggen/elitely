import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import Icon from "../../icon/Icon";

export type CardInfoProps = {};

const CardInfo = ({}: CardInfoProps): React.ReactElement => (
    <>
        <h3 className='card-info__title'>Xiuxian, 22</h3>
        <Row>
            <Col xs='auto'>
                <Icon icon='fa-sharp fa-solid fa-graduation-cap'>SIM-UOL</Icon>
            </Col>
            <Col xs='auto'>
                <Icon icon='fa-solid fa-briefcase'>Student at University</Icon>
            </Col>
        </Row>
        <hr />
        <Table
            className='card-info__table'
            borderless>
            <thead>
            <tr>
                <th style={{width: '25%'}}></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Age</th>
                <td>22</td>
            </tr>
            <tr>
                <th>Race</th>
                <td>Chinese</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>English, Mandarin</td>
            </tr>
            <tr>
                <th>Height</th>
                <td>158cm</td>
            </tr>
            <tr>
                <th>Sexual Orientation</th>
                <td>Heterosexual</td>
            </tr>
            <tr>
                <th>Meetups</th>
                <td>$200 / 2h</td>
            </tr>
            <tr>
                <th>Responsiveness (chats)</th>
                <td>Usually responds in 30 minutes</td>
            </tr>
            </tbody>
        </Table>
        <hr />

    </>
);


export default CardInfo;