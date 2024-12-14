import React from 'react';
import './Proyectos.css';


const Proyectos: React.FC = () => {
    return (
        <section className='proyectos-container'>
            <h1 className='proyectos-title'>Mis proyectos👨‍💻</h1>
            <div className='proyectos-grid'>
                <div className='proyectos-card'>
                    <img className='proyectos-card-img' src='presupuesto.webp' alt='proyecto1' />
                    <article className='proyectos-card-article'>
                        <h2 className='proyectos-card-title'>Calcula tu presupuesto</h2>
                        <p className='proyectos-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae purp
                        </p>
                    </article>
                </div>
                <div className='proyectos-card'>
                    <img className='proyectos-card-img' src='weatherapp.webp' alt='proyecto1' />
                    <article className='proyectos-card-article'>
                        <h2 className='proyectos-card-title'>WeatherApp</h2>
                        <p className='proyectos-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae purp
                        </p>
                    </article>
                </div>
                <div className='proyectos-card'>
                    <img className='proyectos-card-img' src='ochoescalones.webp' alt='proyecto1' />
                    <article className='proyectos-card-article'>
                        <h2 className='proyectos-card-title'>Los 8 escalones</h2>
                        <p className='proyectos-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae purp
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Proyectos;