import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import 'uikit';

const Spinner = ({ content, className, size, middle }) => (
    <Fragment>
        <div
            className={cx([size], [middle && 'middle'], [className])}
            data-uk-spinner={''}
        />
        {content && <span className="spinner-text">{content}</span>}
    </Fragment>
);

Spinner.propTypes = {
    content: propTypes.string,
    className: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large']),
    middle: propTypes.bool,
};

export default Spinner;
