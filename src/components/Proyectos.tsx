import React from 'react';
import './Proyectos.css';


const Proyectos: React.FC = () => {
    return (
        <section className='proyectos-container' id='proyectos'>
            <h1 className='proyectos-title'>Mis proyectos👨‍💻</h1>
            <div className='proyectos-grid'>
                <div className='proyectos-card'>
                    <img className='proyectos-card-img' src='weatherapp.webp' alt='proyecto1' />
                    <article className='proyectos-card-article'>
                        <h2 className='proyectos-card-title'>WeatherApp</h2>
                        <p className='proyectos-card-text'> Proyecto personal de una app de clima, consume la API de OpenWeatherMap, muestra el clima actual y un forecast de los próximos 3 días. 
                        </p>
                    </article>
                </div>
                <div className='proyectos-card'>
                    <img className='proyectos-card-img' src='presupuesto.webp' alt='proyecto1' />
                    <article className='proyectos-card-article'>
                        <h2 className='proyectos-card-title'>Calcula tu presupuesto</h2>
                        <p className='proyectos-card-text'>Calcula cuánto cobrar en base a cantidad usada de cada ingrediente y el valor de la
                        mano de obra. Los datos de ingredientes son consumidos desde una API
                        de GoogleSheets para facilitar una interfaz a los usuarios.
                        </p>
                    </article>
                </div>
                <div className='proyectos-card'>
                    <img className='proyectos-card-img' src='ochoescalones.webp' alt='proyecto1' />
                    <article className='proyectos-card-article'>
                        <h2 className='proyectos-card-title'>Los 8 escalones</h2>
                        <p className='proyectos-card-text'>Proyecto final grupal de POO (8 personas), trabajé en el equipo de logica principalmente. Cuenta con distintos formatos de rondas, ABM de usuarios, preguntas y respuestas, y ranking de ganadores.
                        </p>
                    </article>
                </div>
                <div className='proyectos-card proyectos-trebol'>
                    <img className='proyectos-card-img' src='trebolbento.webp' alt='trebol' />
                </div>
            </div>
        </section>
    );
};

export default Proyectos;