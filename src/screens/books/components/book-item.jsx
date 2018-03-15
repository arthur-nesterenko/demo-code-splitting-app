import propTypes from 'prop-types';
import React from 'react';



const BookItem = ({ book_details }) => {

    const book = book_details[0];

    return (

        <div className="uk-card uk-card-default">
            <div className='uk-card-body'>
                <div className="uk-card-badge uk-label">{book.price}$</div>
                <h3 className="uk-card-title uk-text-break">{book.title}</h3>
                <p>{book.description}</p>
            </div>
            <div className="uk-card-footer">
                <h6>{book.author}</h6>
            </div>
        </div>
    )
}

BookItem.propTypes = {
    book_details: propTypes.array.isRequired
}

export default BookItem;

