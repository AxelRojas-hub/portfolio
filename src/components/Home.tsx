
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <article className='home-article'>
                <h1 className='home-article-title'>¡Hola, soy Axel Rojas!👋🇦🇷</h1>  
                <p className='home-article-text'>Desarrollo principalmente en <span className='home-article__accent'>React&TypeScript</span>. Estoy en tercer año de Licenciatura en informática, este 2025 me recibo como Analista Programador Universitario👨‍🎓.</p>
                <a className="home-article-btn"href="">DESCARGA MI CV ⇓</a>
            </article>
            <div className="blob">
                <h1 className='blob-title'>SOFTWARE DEVELOPER <br />REACT&TS<br/>JAVASCRIPT<br/>HTML&CSS<br />FULLSTACK <br />JAVA&PYTHON</h1>
                <img className="blob-trebol" src="trebol.webp" alt="" />
            </div>
        </div>
    );
};

export default Home;