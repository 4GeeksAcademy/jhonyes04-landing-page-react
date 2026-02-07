import React from 'react';

export const NavbarLink = ({
    link: { url = '#', label = 'link', activo = '' },
}) => {
    return (
        <li className="nav-item">
            <a href={url} className={`nav-link ${activo}`}>
                {label}
            </a>
        </li>
    );
};
