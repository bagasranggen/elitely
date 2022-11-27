import React from 'react';

export type StarProps = {
    rating: number;
    average: string;
    total: string;
};

const Star = ({rating, average, total}: StarProps): React.ReactElement => (
    <div className='ratings'>
        <div className="ratings__text">Rating</div>
        <div className="ratings__icon">
            {Array(5).fill(0).map((_, i) => {
                if (rating > i) {
                    return <i
                        key={i}
                        className="fa-solid fa-star" />
                }

                return (<i
                    key={i}
                    className="fa-regular fa-star" />)
            })}
        </div>
        <div className="ms-auto ratings__average">
            {average} of {total} reviews
        </div>
    </div>
);

export default Star;