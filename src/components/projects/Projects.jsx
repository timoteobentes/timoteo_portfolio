import React from 'react';
import './projects.css';
import photo3 from '../../img/photo3.png';
import pro1 from '../../img/Projeto_Gospel.PNG';
import pro2 from '../../img/krypto.png';

const Projects = () => {
    return (
        <div id="projects">
            <div className="texts_projects">
                <h2>PROJETOS</h2>
            </div>
            <div className='hab-projects'>
                <div className='projects-line-1'>
                    <div className='P1'>
                        <img src={pro1} className="Projeto-1" alt="Foto" width={400} />
                        <a rel="noreferrer" target="_blank" href="https://github.com/timoteobentes/Gospelplus" className='label-pro'>Gospel +</a>
                    </div>
                    <div className='P2'>
                        <img src={pro2} className="Projeto-2" alt="Foto" width={400} />
                        <a rel="noreferrer" target="_blank" href="https://github.com/timoteobentes/krypto" className='label-pro2'>Krypto!</a>
                    </div>
                </div>
            </div>
            <div className="photo_3">
                <img src={photo3} className="Photo-timo3" alt="Foto" width={450} />
                <a className="allRepo" rel="noreferrer" target="_blank" href="https://github.com/timoteobentes?tab=repositories">Ver todos</a>
            </div>
            
        </div>
    )
}

export default Projects;