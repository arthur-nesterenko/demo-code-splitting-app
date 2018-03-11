import propTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom'
import 'uikit';



const OverviewItem = ({ display_name, list_image, books, updated, list_name_encoded }) => (
    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid={''}>
        <div className="uk-card-media-left uk-cover-container">
            <img src={list_image} alt={display_name} data-uk-cover={''} />
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{display_name}</h3>
                <Link className='uk-button uk-button-default'
                    to={`/books/${list_name_encoded}`} >See books</Link>
            </div>
        </div>
    </div>
)


OverviewItem.propTypes = {
    display_name: propTypes.string,
    list_image: propTypes.string,
    books: propTypes.array
}


export default OverviewItem;