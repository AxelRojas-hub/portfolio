import React from 'react';
import './Contacto.css';

const Contacto: React.FC = () => {
    return (
        <div className='contacto-container'>
            <h1 className='contacto-title'>Contacto</h1>
            <h2 className='contacto-subtitle'>Podes encontrarme en</h2>
            <ul className='contacto-list'>
                <li className='contacto-list-item'>
                    <span role="img" aria-label="email">📧</span> example@example.com
                </li>
                <li className='contacto-list-item'>
                    <span role="img" aria-label="phone">📞</span> +123456789
                </li>
            </ul>
        </div>
    );
};

export default Contacto;