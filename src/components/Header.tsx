import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='header-title'><span className='header-title-accent'>A</span>R</h1>
            <div className='header-hamburguer'>
                ☰
            </div>
        </header>
    );
};

export default Header;