import { connect } from 'react-redux';
import { compose, lifecycle, } from 'recompose'
import HomePage from './../components/page-component'
import { homeActions, homeSelectors } from './../service'


const mapStateToProps = state => ({
    items: homeSelectors.itemsSelectors(state),
    isFetching: homeSelectors.isFetchingSelector(state)
});

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(homeActions.receive.request())
})


const lifeCycleConfig = {
    componentDidMount() {
        this.props.fetch()
    }
}


const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle(lifeCycleConfig)
)



export default enhance(HomePage)