import React from 'react';
import './home.css';
import photo1 from '../../img/photo1.png'
import CVO from '../../CV.pdf';

const Home = () => {
    return (
        <div id="home">
            <div className="texts">
                <h1>Timóteo Bentes</h1>
                <h4 className='desc effect'>Desenvolvedor Front-End Jr</h4>
            </div>
            <div className="photo">
                <img src={photo1} className="Photo-tim" alt="Foto" width={500} />
            </div>
            <div className="see-github">
                <a rel="noreferrer" target='_blank' href="https://github.com/timoteobentes?tab=repositories" className="github-home">Ver repositório</a>
            </div>
            <div className="see-cv">
                <a href={CVO} download className="cv-home">Baixar CV</a>
            </div>
        </div>
    )
}

export default Home;