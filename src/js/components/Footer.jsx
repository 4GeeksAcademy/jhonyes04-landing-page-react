import React from 'react';

export const Footer = () => {
    const fecha = new Date().getFullYear();
    return (
        <div className="container-fluid bg-dark text-center p-4 position-absolute bottom-0">
            <p className="text-white m-0">
                Copyright &copy; Landing Page React {fecha}
            </p>
        </div>
    );
};
