import React, { Fragment } from 'react';
import { Placeholder } from './../../../shared/components/ui'
import BookList from './book-list'


const BookPage = ({ isFetching, items }) => {

    return <Placeholder loading={isFetching} >
        <Fragment>
        <h1 className="uk-heading-line uk-text-center"><span>Books</span></h1>
            <BookList items={items} />
        </Fragment>
    </Placeholder>
}


export default BookPage;