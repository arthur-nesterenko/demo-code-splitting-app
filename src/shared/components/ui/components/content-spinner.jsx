import propTypes from 'prop-types';
import React from 'react';
import Spinner from './spinner';
import cx from 'classnames';

const ContentPreloader = ({
    children,
    loading,
    content,
    height,
}) => loading ? (
    children
) : (
            <div
                className={cx('uk-position-relative', 'uk-overflow-hidden', [
                    height && `uk-height-${height}`,
                    'uk-text-center',
                ])}
            >
                {children}
                <div className="uk-overlay-default darker uk-position-cover">
                    <div className="uk-position-center">
                        <Spinner size="medium" content={content} />
                    </div>
                </div>
            </div>
        )


ContentPreloader.defaultProps = {
    height: 'medium',
};
ContentPreloader.propTypes = {
    height: propTypes.oneOf(['small', 'medium', 'large', '1-1']),
    children: propTypes.any.isRequired,
    loading: propTypes.bool.isRequired,
    content: propTypes.string,
};

export default ContentPreloader;
