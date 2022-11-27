import React from 'react';
import Link from "next/link";

import mobileNavIcon from "../../../../data/mobileNavIcon";

import {Nav} from "react-bootstrap";

export type ListNavProps = {
    items: Array<{
        uri: string;
        label: string;
    }>;
    active: string;
    setActive?: (active: string) => void
};

const ListNav = ({items, active, setActive}: ListNavProps): React.ReactElement => (
    <Nav
        className='row gx-0 list-nav'
        activeKey={active}
        onSelect={(selectedKey: string | null) => (typeof selectedKey === 'string' && setActive) && setActive(selectedKey)}>
        {items.map((h: any) => (
            <div
                key={h.uri}
                className="col text-center">
                <Nav.Item className={h.uri === active ? ' active' : ''}>
                    <Link
                        href={h.uri}
                        className='d-none d-md-block'>{h.label}</Link>
                    <Link
                        href={h.uri}
                        // @ts-ignore
                        className='d-md-none'>{mobileNavIcon[h.icon as keyof Object]}</Link>
                </Nav.Item>
            </div>
        ))}
    </Nav>
);

export default ListNav;