import { NavbarLink } from './NavbarLink';

const links = [
    {
        url: '#',
        label: 'Home',
        active: true,
    },
    {
        url: '#',
        label: 'About',
        active: false,
    },
    {
        url: '#',
        label: 'Services',
        active: false,
    },
    {
        url: '#',
        label: 'Contact',
        active: false,
    },
];

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
                        {links.map((link, index) => (
                            <NavbarLink key={index} link={link} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
