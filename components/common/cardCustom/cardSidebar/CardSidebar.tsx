import React from 'react';
import Link from "next/link";
import Image from "next/image";

import Verified from '../../../../assets/images/verified.svg'

import Button from "../../button/Button";

export type CardSidebarProps = {
    title: string;
    thumbnailType: 'rectangle' | 'circle';
    items: Array<any>;
};

const CardSidebar = ({title, thumbnailType, items}: CardSidebarProps): React.ReactElement => {
    const categoryColor = (category: 'influencer' | 'personality') => {
        switch (category) {
            case "influencer":
                return 'secondary';

            case "personality":
                return 'tertiary';
        }
    }


    return (
        <>
            <h3 className="mb-0 card-sidebar__title">{title}</h3>

            <div className={`card-sidebar__cards cards-thumbnail cards-thumbnail--${thumbnailType}`}>
                {items.map((item: any) => (
                    <div key={item.username}>
                        <hr />
                        <Link
                            href={item.uri}
                            className="row cards-thumbnail__item">
                            <div className="col-auto">
                                <div className={`cards-thumbnail__image${item?.category ? ` cards-thumbnail__image--${categoryColor(item.category)}` : ''}`}>
                                    <Image
                                        src={item.imageSrc}
                                        width={item.imageWidth}
                                        height={item.imageHeight}
                                        alt={item.username ? item.username : ''} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="cards-thumbnail__description">
                                    {thumbnailType === 'rectangle' &&
                                        <h4 className={`text-uppercase cards-thumbnail__category${item?.category ? ` cards-thumbnail__category--${categoryColor(item.category)}` : ''}`}>{item.category}</h4>}
                                    <p className={`cards-thumbnail__username${thumbnailType === 'circle' ? ' d-flex align-items-center' : ''}`}>{item.username}{item?.isVerified &&
                                        <span className='d-inline-block ms-1'><Verified /></span>}</p>
                                    {thumbnailType === 'circle' ?
                                        <p className='mt-auto cards-thumbnail__bio'>{item.bio}</p> :
                                        <p className='mt-auto cards-thumbnail__status'>{item.lastSeen}</p>}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <Button
                type='button'
                buttonType='button'
                color='light-dark'
                size='md'
                fullWidth>Load More</Button>
        </>
    )
};

export default CardSidebar;