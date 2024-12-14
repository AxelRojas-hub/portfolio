import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='header-title'><span className='header-title-accent'>A</span>R</h1>
            <div className='header-hamburguer'>
                ☰
            </div>
            <nav className='header-navbar'>
                <ul className='header-navbar-list'>
                    <li className='header-navbar-item'>Home</li>
                    <li className='header-navbar-item'>Proyectos</li>
                    <li className='header-navbar-item'>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;