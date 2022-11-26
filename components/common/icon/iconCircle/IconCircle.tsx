import React from 'react';

export type IconCircleProps = {
    icon: string;
    children: React.ReactNode;
};

const IconCircle = ({icon, children}: IconCircleProps): React.ReactElement => (
    <div className="d-flex align-items-center icon-circle">
        <i className={icon} />
        <p className='mb-0'>{children}</p>
    </div>
);

export default IconCircle;