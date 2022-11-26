import type {NextPage} from 'next';

import React, {useState} from 'react';

import dummyProfile from '../data/dummyProfile';
import dummyRelatedPerson from '../data/dummyRelatedPerson';
import dummyInterestedPerson from '../data/dummyInterestedPerson';

import {Col, Container, Row, Tabs, Tab} from "react-bootstrap";

import CardCustom from "../components/common/cardCustom/CardCustom";
import Icon from "../components/common/icon/Icon";

const Home: NextPage = () => {
    const [activeTab, setActiveTab] = useState<string>('about')

    return (
        <Container>

            <CardCustom
                type='profile'
                className='mb-1'
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
                            Home
                        </Tab>
                        <Tab
                            eventKey='about'
                            title='About'>
                            <CardCustom type='info' />
                            <div className="mt-3 card-meet">
                                <h3>Meetups</h3>
                                <hr />
                                <div className="card-meet__cards">

                                    <Icon
                                        type='square'
                                        icon='fa-solid fa-rocket'
                                        title='Recent Updates'>I’m free today 10:30 am - 3 pm, coming from West. Open to
                                        try
                                        any area and place!</Icon>
                                    <Icon
                                        type='square'
                                        icon='fa-regular fa-calendar-check'
                                        title='Activities'>Cafe, bar, picnic, anything easy going!</Icon>
                                    <Icon
                                        type='square'
                                        icon='fa-solid fa-utensils'
                                        title='Food Preferences'>Pasta and sushi</Icon>
                                    <Icon
                                        type='square'
                                        icon='fa-regular fa-calendar-check'
                                        title='Availability'>Flexi but preferably weekdays! Please arrange at least two
                                        days in advance.</Icon>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            eventKey='posts'
                            title='Posts'>
                            Home
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <CardCustom
                        type='sidebar'
                        title='Meet our new members'
                        thumbnailType='rectangle'
                        items={dummyRelatedPerson} />

                    <CardCustom
                        type='sidebar'
                        className='mt-1'
                        title='You might also wanna check'
                        thumbnailType='circle'
                        items={dummyInterestedPerson} />
                </Col>
            </Row>
        </Container>

    );
};

export default Home;