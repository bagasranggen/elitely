import React from 'react';
import CardSummary, {CardSummaryProps} from "../cardSummary/CardSummary";

export type CardPostProps = {} & CardSummaryProps;

const CardPost = ({title, education, work, post, children}: CardPostProps): React.ReactElement => (
    <CardSummary
        title={title}
        education={education}
        work={work}
        post={post}>
        {children}
    </CardSummary>
);

export default CardPost;