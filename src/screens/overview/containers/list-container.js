import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { overviewSelectors, overviewActions, } from './../service'
import OverviewList from './../components/overview-list'



const mapStateToProps = state => ({
    isFetching: overviewSelectors.isFetchingSelector(state),
    items: overviewSelectors.itemsSelector(state),
    numResults: overviewSelectors.numResultsSelector(state),
});


const mapDispatchToProps = (dispatch) => ({
    fetch: (published_date) => dispatch(overviewActions.fetch.request({ published_date }))
})



const lifeCycleOptions = {
    componentDidMount() {
        const { fetch, match: { params: { date } } } = this.props;

        date && fetch(date)

    }
}



const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle(lifeCycleOptions),

)



export default enhance(OverviewList)




