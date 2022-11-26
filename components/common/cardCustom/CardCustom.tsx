import React from 'react';

import {Card} from "react-bootstrap";
import CardProfile, {CardProfileProps} from "./cardProfile/CardProfile";
import CardSidebar, {CardSidebarProps} from "./cardSidebar/CardSidebar";
import CardInfo, {CardInfoProps} from "./cardInfo/CardInfo";

export type CardCustomProps = {
    className?: string;
};

type CardCustomConditionalProps = | ({
    type: 'profile';
    title?: never;
    items?: never;
    thumbnailType?: never;
} & CardProfileProps) | ({
    type: 'sidebar';
    profile?: never;
} & CardSidebarProps) | ({
    type: 'info';
    thumbnailType?: never,
    profile?: never,
    title?: never,
    items?: never
} & CardInfoProps)

const CardCustom = ({
                        className,
                        type,
                        thumbnailType,
                        profile,
                        title,
                        items
                    }: CardCustomProps & CardCustomConditionalProps): React.ReactElement => {
    let content;
    const cardClass = `card-${type}${className ? ` ${className}` : ''}`

    switch (type) {
        case "profile":
            content = <CardProfile
                profile={profile} />
            break;

        case "sidebar":
            content = <CardSidebar
                title={title}
                thumbnailType={thumbnailType}
                items={items} />
            break;

        case "info":
            content = <CardInfo />
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