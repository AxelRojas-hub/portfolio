import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='header-title'><span className='header-title-accent'>A</span>R</h1>
            <p className='header-hamburguer'>
                ☰
            </p>
            <nav className='header-navbar'>
                <ul className='header-navbar-list'>
                    <li className='header-navbar-item'><a href="#root">HOME</a></li>
                    <li className='header-navbar-item'><a href="#proyectos">PROYECTOS</a></li>
                    <li className='header-navbar-item'><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;