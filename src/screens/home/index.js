import React from 'react';
import { connect } from 'react-redux'

import { homeActions } from './service'

const HomePage = ({ fetch }) => <div>Home page

    <div >
        <button className='uk-button uk-button-primary' onClick={fetch}> fetch </button>

    </div>
</div>;



const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(homeActions.fetch.request())
})

export default connect(null, mapDispatchToProps)(HomePage);