import React from 'react';
import { connect } from 'react-redux'
import { compose, branch, renderNothing, withState, withHandlers } from 'recompose'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { overviewActions } from './service'
import List from './containers/list-container'





const OverviewPage = ({ onChange, showList }) => {
    return <div>
        <Calendar onChange={onChange} />
        {showList && <div data-uk-grid>
            <List />
        </div>}

    </div>
}


const mapDispatchToProps = (dispatch) => ({
    fetch: (published_date) => dispatch(overviewActions.fetch.request({ published_date }))
});


const shouldRender = props => !props.showList;

const handlers = {
    onChange: props => date => {
        if (!props.showList) props.onShow(true);
        props.fetch(format(date, 'YYYY-MM-DD'))
    }
}

const enhance = compose(
    connect(null, mapDispatchToProps),
    withState('showList', 'onShow', false),
    withHandlers(handlers),
)


export default enhance(OverviewPage)