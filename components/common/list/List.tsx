import React from 'react';

import ListNav, {ListNavProps} from "./listNav/ListNav";

export type ListProps = | ({
    type: 'list-nav'
} & ListNavProps);

const List = ({type, items, active, setActive}: ListProps): React.ReactElement => {
    switch (type) {
        case "list-nav":
            return <ListNav
                items={items}
                active={active}
                setActive={setActive} />
    }
}

export default List;