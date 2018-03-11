import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { overviewSelectors } from './../service'
import OverviewPage from './../components/page-component'


const mapStateToProps = state => ({
    isFetching: overviewSelectors.isFetchingSelector(state),
    items: overviewSelectors.itemsSelector(state),
    numResults: overviewSelectors.numResultsSelector(state)
});


const mapDispatchToProps = (dispatch) => ({
    fetch: (published_date) => dispatch(fetch({ published_date }))
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
    lifecycle(lifeCycleOptions)
)



export default enhance(OverviewPage)




