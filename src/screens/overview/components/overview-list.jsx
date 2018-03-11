import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Placeholder } from './../../../shared/components/ui'
import OverviewItem from './overview-item'



const OverviewList = ({ isFetching, items: { lists, bestsellers_date } }) => {

    return <Placeholder loading={isFetching}>
        <Fragment>
            <h1 className="uk-heading-line uk-text-center">
                <span>{bestsellers_date}</span>
            </h1>
            {lists.map(item => <OverviewItem key={item.list_id}  {...item} />)}
        </Fragment>
    </Placeholder>
}

OverviewList.propTypes = {
    isFetching: propTypes.bool,
    items: propTypes.object
}



export default OverviewList;