import propTypes from 'prop-types';
import React from 'react';
import BookItem from './book-item'
import 'uikit'


const BookList = ({ items }) => (
    <div className='uk-grid-small uk-grid-match uk-child-width-1-3' data-uk-grid>
        {items.map((item, key) => <div key={key}><BookItem   {...item} /> </div>)}
    </div>
)


BookList.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired
}


export default BookList;