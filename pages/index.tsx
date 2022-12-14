import type {NextPage} from 'next';

import React, {useState} from 'react';

import dummyProfile from '../data/dummyProfile';
import dummyRelatedPerson from '../data/dummyRelatedPerson';
import dummyInterestedPerson from '../data/dummyInterestedPerson';
import dummyCarousel from '../data/dummyCarousel';
import dummyMeetups from '../data/dummyMeetups';

import {Col, Container, Row, Tabs, Tab, Table} from "react-bootstrap";

import CardCustom from "../components/common/cardCustom/CardCustom";
import Icon from "../components/common/icon/Icon";
import Star from '../components/common/star/Star'
import Button from "../components/common/button/Button";
import Slider from "../components/common/slider/Slider";

const Home: NextPage = () => {
    const [activeTab, setActiveTab] = useState<string>('main');
    const [isFollowed, setIsFollowed] = useState<boolean>(false)

    return (
        <Container className='mb-4'>

            <CardCustom
                type='profile'
                isFollowed={isFollowed}
                setIsFollowed={() => setIsFollowed(!isFollowed)}
                className='mb-md-1'
                profile={dummyProfile[0].profile} />

            <Row className='gx-1'>
                <Col md={8}>
                    <Tabs
                        className='list-tab'
                        activeKey={activeTab}
                        onSelect={(eventKey) => (typeof eventKey === 'string') && setActiveTab(eventKey)}
                        fill>
                        <Tab
                            eventKey='main'
                            title='Main'>
                            <CardCustom
                                type='post'
                                title='Xiuxian, 22'
                                education='SIM-UOL'
                                work='Student at University'
                                post={<Slider
                                    type='post'
                                    items={dummyCarousel} />}>
                                <p className='mb-0'>Gemini. Art student and tall. <br /> Coffee, cold showers and early
                                    morning walks!
                                </p>
                            </CardCustom>
                        </Tab>
                        <Tab
                            eventKey='about'
                            title='About'>
                            <CardCustom
                                type='info'
                                title='Xiuxian, 22'
                                education='SIM-UOL'
                                work='Student at University'>
                                <Table
                                    className='card-info__table'
                                    borderless>
                                    <thead>
                                    <tr>
                                        <th style={{width: '35%'}}></th>
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
                                <Row className='gy-1 align-items-center'>
                                    <Col>
                                        <Star
                                            rating={4}
                                            average='4.5'
                                            total='193' />
                                    </Col>
                                    <Col md={4}>
                                        <Button
                                            color='light-dark'
                                            size='md'
                                            type='button'
                                            buttonType='button'
                                            fullWidth>
                                            Reviews
                                        </Button>
                                    </Col>
                                </Row>
                            </CardCustom>
                            <div className="mt-3 card-meet">
                                <h3>Meetups</h3>
                                <hr />
                                <Slider
                                    type='icon'
                                    className='d-lg-none'
                                    perPage={2}
                                    items={dummyMeetups} />
                                <div className="d-none d-lg-block card-meet__cards">
                                    {dummyMeetups.map((dm: any) => (
                                        <Icon
                                            key={dm.description}
                                            type='square'
                                            iconType='icon'
                                            icon={dm.icon}
                                            title={dm.title}>{dm.description}</Icon>
                                    ))}
                                </div>

                            </div>
                        </Tab>
                        <Tab
                            eventKey='posts'
                            title='Posts'>
                            Post Content
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <CardCustom
                        type='sidebar'
                        className='d-none d-lg-block'
                        title='Meet our new members'
                        thumbnailType='rectangle'
                        items={dummyRelatedPerson} />

                    <CardCustom
                        type='sidebar'
                        className='d-none d-lg-block mt-lg-1'
                        title='You might also wanna check'
                        thumbnailType='circle'
                        items={dummyInterestedPerson} />
                </Col>
            </Row>
        </Container>

    );
};

export default Home;