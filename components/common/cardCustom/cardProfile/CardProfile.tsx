import React from 'react';
import Image from "next/image";

import Verified from '../../../../assets/images/verified.svg';
import Menu from '../../../../assets/images/menu.svg'

import {Col, Row} from "react-bootstrap";
import Button from "../../button/Button";
import Icon from "../../icon/Icon";

export type CardProfileProps = {
    isFollowed?: boolean;
    setIsFollowed?: () => void;
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

const CardProfile = ({isFollowed, setIsFollowed, profile}: CardProfileProps): React.ReactElement => (
    <>
        <Row className='gx-1 gx-lg-2'>
            <Col
                className='card-profile__profile'
                xs={'auto'}>
                <div className={`card-profile__image${profile.isVerified ? ' card-profile__image--verified' : ''}`}>
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
                    className='mt-1 text-uppercase'
                    fullWidth>Personality</Button>
            </Col>
            <Col>
                <h2>{profile.username}{profile.isVerified && <Verified />}</h2>
                <div className={`card-profile__status card-profile__status--${profile.isOnline ? 'online' : 'offline'} ps-1`}>{profile.isOnline ? 'Online now' : 'Offline'}</div>
                <p>{profile.bio}</p>
            </Col>
            <Col
                xs='auto'
                md={3}
                className='align-self-md-center'>
                <Icon
                    type='circle'
                    icon={<Menu />}
                    iconType='svg' />
            </Col>
        </Row>
        <hr />
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
                    isActive={isFollowed}
                    onClick={setIsFollowed}
                    fullWidth>{isFollowed ? 'Followed' : 'Follow'}</Button>
            </Col>
        </Row>
    </>
);

export default CardProfile;