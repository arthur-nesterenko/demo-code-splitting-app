import React from 'react'
import { Placeholder } from './../../../shared/components/ui'

const ReviewPage = ({ isFetching, items }) => <Placeholder loading={isFetching} >
    <div className='uk-height-large'>
        {items.length === 0
            ? <h1 className="uk-heading-line uk-text-center"><span>Not Found</span></h1>
            : null
        }
    </div>
</Placeholder>



export default ReviewPage;