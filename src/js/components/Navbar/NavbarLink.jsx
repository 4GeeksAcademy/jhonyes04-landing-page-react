import React from 'react';

export const NavbarLink = ({
    link: { url = '#', label = 'link', active = false },
}) => {
    return (
        <li className="nav-item">
            <a href={url} className={`nav-link ${active ? 'active' : ''}`}>
                {label}
            </a>
        </li>
    );
};
