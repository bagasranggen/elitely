import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

import headerNavigation from '../../../data/headerNavigation'

import {Container, Row, Col} from "react-bootstrap";
import List from "../../common/list/List";

export type HeaderProps = {};

const Header = ({}: HeaderProps): React.ReactElement => {
    const {asPath} = useRouter();
    const [activeNav, setActiveNav] = useState<string>(asPath);

    useEffect(() => {
        setActiveNav(asPath)
    }, [asPath])

    return (
        <>
            <Container
                className='header-top'
                fluid>
                <Row>
                    <Col></Col>
                    <Col className='text-center'><h1 className='mb-0'>Profile</h1></Col>
                    <Col></Col>
                </Row>
            </Container>

            <section className='header-navigation'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={8}>
                            <List
                                type='list-nav'
                                items={headerNavigation}
                                active={activeNav}
                                setActive={setActiveNav} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Header;