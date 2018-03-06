import React from 'react';
import { connect } from 'react-redux'
import { postsActions } from './service'



const PostPage = ({ fetch }) => <div>
    <h1 className='uk-text-center uk-text-lead'>Posts page</h1>
    <div className='uk-margin'>
        <button className='uk-button uk-button-primary' onClick={fetch}>Fetch posts</button>
    </div>
</div>;



const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(postsActions.fetch.request())
})

export default connect(null, mapDispatchToProps)(PostPage);