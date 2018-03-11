import React from 'react'
import { ContentSpinner } from './../../../shared/components/ui'

const ReviewPage = ({ isFetching, items }) => <ContentSpinner loading={isFetching} >
    <div>
        hello review page
    </div>
</ContentSpinner>



export default ReviewPage;