
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <div className="blob">
                <h1 className='blob-title'>SOFTWARE DEVELOPER <br />REACT&TS<br/>JAVASCRIPT<br/>HTML&CSS<br />FULLSTACK <br />JAVA&PYTHON</h1>
                <img className="blob-trebol" src="trebol.webp" alt="" />
            </div>
            <article className='home-article'>
                <div className="home-article-header">
                <h1 className='home-article-title'>¡Hola, soy Axel Rojas!👋🇦🇷</h1>
            
                <a className="home-article-btn"href="">MI CV ⇓</a>
            
                </div>
                <p className='home-article-text'>Desarrollo principalmente en <span className='home-article__accent'>React&TypeScript</span>. Estoy en tercer año de Licenciatura en informática, este 2025 me recibo como Analista Programador Universitario👨‍🎓.</p>
            </article>
        </div>
    );
};

export default Home;