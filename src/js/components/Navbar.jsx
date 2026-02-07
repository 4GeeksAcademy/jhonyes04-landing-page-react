import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container">
                <a
                    href="#"
                    className="navbar-brand text-white fs-3 m-0 fw-bold"
                >
                    Start Bootstrap
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    aria-expanded="false"
                    aria-label="Manú"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-start"
                    id="menu"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
