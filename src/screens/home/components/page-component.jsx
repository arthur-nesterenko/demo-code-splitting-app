import propTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Placeholder } from './../../../shared/components/ui'
import 'uikit';


const createLink = ({ author }) => `/reviews/${author}`;


const HomePage = ({ isFetching, items }) => (
    <Placeholder loading={isFetching} >
        <div className="uk-grid-small uk-child-width-1-4 uk-grid-match uk-text-center" data-uk-grid>
            {items.map((item, key) => (
                <div key={key}>
                    <div className="uk-card uk-card-hover uk-card-default">
                        <div className="uk-card-header">
                            <div className="uk-card-badge uk-label">{item.price}$</div>
                            <h5 className='uk-card-title uk-text-left uk-text-break'>{item.title}</h5>
                        </div>
                        <div className="uk-card-body">

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
    </Placeholder>
)


HomePage.propTypes = {
    isFetching: propTypes.bool,
    // items: propTypes.arrayOf(propTypes.object)
}



export default HomePage;