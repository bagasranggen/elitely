import React from 'react';
import Image from "next/image";

import verified from '../../../../assets/images/verified.svg'

import {Col, Row} from "react-bootstrap";
import Button, {ButtonWrapper} from "../../button/Button";

export type CardProfileProps = {
    profile: {
        username: string;
        bio: React.ReactNode;
        photo: string;
        width: number,
        height: number,
        isVerified: boolean;
        isOnline: boolean;
        hasStory: boolean;
    }
};

const CardProfile = ({profile}: CardProfileProps): React.ReactElement => (
    <>
        <Row>
            <Col
                className='card-profile__profile'
                xs={'auto'}>
                <div className={`card-profile__image${profile.isVerified ? ' cardProfile-profile__image--verified' : ''}`}>
                    <Image
                        src={profile.photo}
                        width={profile.width}
                        height={profile.height}
                        alt={profile.username + ' photo'} />
                </div>
                <Button
                    type='button'
                    buttonType='button'
                    size='sm'
                    color='secondary'
                    classNames='mt-1 text-uppercase'
                    fullWidth>Personality</Button>
            </Col>
            <Col>
                <h2>{profile.username}{profile.isVerified && <Image
                    src={verified}
                    alt='user is verified' />}</h2>
                <div className={`card-profile__status card-profile__status--${profile.isOnline ? 'online' : 'offline'} ps-1`}>{profile.isOnline ? 'Online now' : 'Offline'}</div>
                <p>{profile.bio}</p>
            </Col>
            <Col>
                ss
            </Col>
        </Row>
        <hr />
        {/*<ButtonWrapper>*/}
        {/*    <Button*/}
        {/*        type='button'*/}
        {/*        buttonType='button'*/}
        {/*        size='md'*/}
        {/*        color='primary'*/}
        {/*        classNames='col-md'*/}
        {/*        fullWidth>Chat</Button>*/}
        {/*    <Button*/}
        {/*        type='button'*/}
        {/*        buttonType='button'*/}
        {/*        size='md'*/}
        {/*        color='primary'*/}
        {/*        fullWidth>Chat</Button>*/}

        {/*</ButtonWrapper>*/}
        <Row className='btn-gap--gx-10'>
            <Col>
                <Button
                    type='button'
                    buttonType='button'
                    size='md'
                    color='primary'
                    fullWidth>Chat</Button>
            </Col>
            <Col>
                <Button
                    type='button'
                    buttonType='button'
                    size='md'
                    color='primary'
                    fullWidth>Meet</Button>
            </Col>
            <Col>
                <Button
                    type='button'
                    buttonType='button'
                    size='md'
                    color='light'
                    fullWidth>Follow</Button>
            </Col>
        </Row>
    </>
);

export default CardProfile;