import React from 'react';

import {Card} from "react-bootstrap";
import CardProfile, {CardProfileProps} from "./cardProfile/CardProfile";
import CardSidebar, {CardSidebarProps} from "./cardSidebar/CardSidebar";
import CardInfo, {CardInfoProps} from "./cardInfo/CardInfo";
import CardPost, {CardPostProps} from "./cardPost/CardPost";

export type CardCustomProps = {
    className?: string;
};

type CardCustomConditionalProps = | ({
    type: 'profile';
    title?: never;
    items?: never;
    thumbnailType?: never;
    education?: never;
    work?: never;
    post?: never;
    children?: never;
} & CardProfileProps) | ({
    type: 'sidebar';
    isFollowed?: never;
    setIsFollowed?: never;
    profile?: never;
    education?: never;
    work?: never;
    post?: never;
    children?: never;
} & CardSidebarProps) | ({
    type: 'info';
    thumbnailType?: never;
    isFollowed?: never;
    setIsFollowed?: never;
    profile?: never;
    items?: never;
} & CardInfoProps) | ({
    type: 'post';
    thumbnailType?: never;
    isFollowed?: never;
    setIsFollowed?: never;
    profile?: never;
    items?: never;
} & CardPostProps)

const CardCustom = ({
                        className,
                        type,
                        thumbnailType,
                        isFollowed,
                        setIsFollowed,
                        profile,
                        title,
                        items,
                        education,
                        work,
                        post,
                        children
                    }: CardCustomProps & CardCustomConditionalProps): React.ReactElement => {
    let content;
    const cardClass = `card-${type}${className ? ` ${className}` : ''}`

    switch (type) {
        case "profile":
            content = <CardProfile
                isFollowed={isFollowed}
                setIsFollowed={setIsFollowed}
                profile={profile} />
            break;

        case "sidebar":
            content = <CardSidebar
                title={title}
                thumbnailType={thumbnailType}
                items={items} />
            break;

        case 'info':
            content = <CardInfo
                title={title}
                work={work}
                education={education}>{children}</CardInfo>
            break;

        case "post":
            content = <CardPost
                title={title}
                education={education}
                work={work}
                post={post}>
                {children}
            </CardPost>
            break;
    }

    return (
        <Card className={cardClass}>
            <Card.Body>
                {content}
            </Card.Body>
        </Card>
    )
}

export default CardCustom;