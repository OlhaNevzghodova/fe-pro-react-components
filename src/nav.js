import React from 'react';
import PropTypes from 'prop-types'

const NavItem = ({content, link}) => {
    return <li className="nav-list__item">
        <a href={link}>
            {content}
        </a>
    </li>
};

NavItem.propTypes = {
    content: PropTypes.string,
    link: PropTypes.string
}

export default NavItem;