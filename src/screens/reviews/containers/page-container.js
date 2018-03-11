import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom'
import ReviewPage from './../components/page-component'
import { reviewsActions, reviewsSelectors } from './../service'



const mapStateToProps = state => ({
    isFetching: reviewsSelectors.isFetchingSelector(state),
    items: reviewsSelectors.itemsSelector(state)
})

const mapDispatchToProps = (dispatch, { match: { params: { author } } }) => ({
    fetch: () => dispatch(reviewsActions.fetch.request({ author}))
})


const lifeCycleOptions = {
    componentDidMount() {
        this.props.fetch()
    }
}



const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle(lifeCycleOptions)

)



export default enhance(ReviewPage)