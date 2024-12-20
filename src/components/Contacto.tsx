import React from 'react';
import './Contacto.css';
const Contacto: React.FC = () => {

    return (
        <section className='contacto-container' id='contacto'>
            <div className='contacto-article'>
                <h1 className='contacto-title'>Contacto</h1>
                <ul className='contacto-list'>
                    <li className='contacto-list-item'>
                        <span role="img" aria-label="email">📧</span> example@example.com
                    </li>
                    <li className='contacto-list-item'>
                        <span role="img" aria-label="phone">📞</span> +123456789
                    </li>
                    <li className='contacto-list-item'>
                        <span role="img" aria-label="phone">⚙️</span> +123456789
                    </li>
                </ul>
            </div>
            <div className='contacto-card'>
                <img className='contacto-card-img' src="https://avatars.githubusercontent.com/u/89797191?v=4" alt="Foto de perfil de Axel Rojas" />
                <article>
                <h3 className='contacto-card-title'>Sobre mi</h3>
                <p className='contacto-card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam illo beatae at nihil tenetur blanditiis unde, earum numquam ipsam sint dolor tempora corporis dolores minus incidunt ab facilis magni.</p>
                </article>
            </div>
        </section>
    );
};

export default Contacto;
