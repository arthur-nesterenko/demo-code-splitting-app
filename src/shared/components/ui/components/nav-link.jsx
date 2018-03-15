import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

class NavLink extends Link {
    isActive = () => {
        const { router: { route: { location: { pathname } } } } = this.context;
        const { to } = this.props;
        const isActive = pathname === (typeof to === 'object' ? to.pathname : to);

        return isActive ? 'uk-active' : '';
    };

    render() {
        return <li className={cx([this.isActive()])}>{super.render()}</li>;
    }
}

export default NavLink;
