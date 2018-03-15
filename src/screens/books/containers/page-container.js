import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom'
import { booksActions, bookSelectors } from './../service'
import BookPage from './../components/page-component'




const mapStateToProps = state => ({
    isFetching: bookSelectors.isFetchingSelector(state),
    items: bookSelectors.itemsSelector(state)
})

const mapDispatchToProps = (dispatch, { match: { params: { list } } }) => ({
    fetch: () => dispatch(booksActions.fetch.request({ list }))
});


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


export default enhance(BookPage)