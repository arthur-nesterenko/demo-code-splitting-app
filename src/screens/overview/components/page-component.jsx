import React from 'react';
import Calendar from 'react-calendar'
import { format } from 'date-fns'




const OverviewPage = ({ fetch }) => {

    const onChange = (date) => fetch(format(date, 'YYYY-MM-DD'))

    return <div>

        <Calendar onChange={onChange} />




    </div>
}


export default OverviewPage;