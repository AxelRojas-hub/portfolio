import React from 'react';
import './Contacto.css';
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const Contacto: React.FC = () => {

    return (
        <section className='contacto-container' id='contacto'>
            <div className='contacto-article'>
                <h1 className='contacto-title'>Contacto📱</h1>
                <ul className='contacto-list'>
                    <li className='contacto-list-item'>
                        <IoIosMail color='#1c8911' size={'2rem'} title='Icono de mail' style={{ marginRight: '5px' }} /> axelkevinagustinrojas@gmail.com
                    </li>
                    <li className='contacto-list-item'>
                        <IoLogoLinkedin color='#1c8911' size={'2rem'} title='Icono de LinkedIn' style={{ marginRight: '5px' }} /> linkedin.com/axelkevinagustinrojas
                    </li>
                    <li className='contacto-list-item'>
                        <FaSquareGithub color='#1c8911' size={'2rem'} title='Icono de GitHub' style={{ marginRight: '5px' }} />github.com/AxelRojas-hub
                    </li>
                </ul>
            </div>
            <div className='contacto-card'>
                <img className='contacto-card-img' src="https://avatars.githubusercontent.com/u/89797191?v=4" alt="Foto de perfil de Axel Rojas" />
                <article>
                <p className='contacto-card-text'>En estos momentos sigo profundizando en React con TypeScript y el proximo objetivo esta en sumar NextJs y TailwindCss a mi stack.</p>
                </article>
            </div>
        </section>
    );
};

export default Contacto;
