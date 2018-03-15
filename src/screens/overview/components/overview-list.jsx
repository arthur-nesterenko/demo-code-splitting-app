import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Placeholder } from './../../../shared/components/ui'
import OverviewItem from './overview-item'
import 'uikit'


const OverviewList = ({ isFetching, items: { lists, bestsellers_date } }) => {

    return <Placeholder loading={isFetching}>
        <Fragment>
            <h1 className="uk-heading-line uk-text-center">
                <span>{bestsellers_date}</span>
            </h1>
            <div className='uk-grid-small uk-grid-match uk-child-width-1-2' data-uk-grid >
                {lists.map(item => <div key={item.list_id}> <OverviewItem   {...item} /> </div>)}
            </div>
        </Fragment>
    </Placeholder>
}

OverviewList.propTypes = {
    isFetching: propTypes.bool,
    items: propTypes.object
}



export default OverviewList;