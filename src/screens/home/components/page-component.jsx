import propTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { ContentSpinner } from './../../../shared/components/ui'
import 'uikit';


const createLink = ({ author }) => `/reviews/${author}`;


const HomePage = ({ isFetching, items }) => (
    <ContentSpinner loading={isFetching} >
        <div className="uk-grid-large uk-child-expand@s uk-child-width-1-2 uk-grid-match uk-text-center" data-uk-grid>
            {items.map((item, key) => (
                <div key={key}>
                    <div className="uk-card uk-card-hover uk-card-default uk-width-1-2@m">
                        <div className="uk-card-header">
                            {item.title}
                        </div>
                        <div className="uk-card-body">
                            <div className="uk-card-badge uk-label">{item.price}$</div>
                            <p>{item.description}</p>
                        </div>
                        <div className="uk-card-footer">
                            <Link to={createLink(item)} className="uk-button uk-button-text">
                                Reviews
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </ContentSpinner>
)


HomePage.propTypes = {
    isFetching: propTypes.bool,
    // items: propTypes.arrayOf(propTypes.object)
}



export default HomePage;