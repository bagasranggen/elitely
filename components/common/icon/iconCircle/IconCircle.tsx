import React from 'react';
import Image from "next/image";

export type IconCircleProps = {
    icon: string | React.ReactNode;
    iconType: 'image' | 'icon' | 'svg';
    children?: React.ReactNode;
};

const IconCircle = ({icon, iconType, children}: IconCircleProps): React.ReactElement => (
// @ts-ignore
    <div className={`d-flex align-items-center icon-circle${!children ? ' icon-circle--lg justify-content-end' : ''}`}>
        {(iconType === 'image' && typeof icon === "string") && <div className="icon-circle__image"><Image
            src={icon}
            alt={icon} /></div>}
        {(iconType === 'icon' && typeof icon === "string") && <i className={icon} />}
        {iconType === 'svg' && <div className="icon-circle__image">{icon}</div>}
        {children ? <p className='mb-0'>{children}</p> : null}
    </div>
);

export default IconCircle;