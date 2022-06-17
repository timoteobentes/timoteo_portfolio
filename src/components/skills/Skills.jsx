import React from 'react';
import './skills.css';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {

    function Trocar() {
        document.getElementsByTagName('p').innerHTML = "Faço uns projetos pessoais. Olha meu Github 😁";
    }

    function Voltar() {
        document.getElementsByTagName('p').innerHTML = "Web Development";
    }

    return (
        <div id="skills">
            <div className="texts_skills">
                <h2>HABILIDADES</h2>
            </div>
            <div className='hab-skills'>
                <div className='skill-line-1'>
                    <div onMouseOver={Trocar} onMouseOut={Voltar} className='WebDev'>
                        <FontAwesomeIcon icon={faHtml5} size="5x"/>
                        <FontAwesomeIcon icon={faCss3Alt} size="5x"/>
                        <p>Web Development</p>
                    </div>
                    <div className='Js'>
                        <FontAwesomeIcon icon={faJsSquare} size="5x"/>
                        <p>JavaScript</p>
                    </div>
                    <div className='React' onMouseOver='ReactOver'>
                        <FontAwesomeIcon icon={faReact} size="5x"/>
                        <p>ReactJS</p>
                    </div>
                    <FontAwesomeIcon icon={['fas', 'github']} />
                </div>
                <div className='skill-line-2'>
                    <div className='GG'>
                        <FontAwesomeIcon icon={faGitAlt} size="5x"/>
                        <FontAwesomeIcon icon={faGithub} size="5x"/>
                        <br></br><br></br>
                        <p>Git e Github</p>
                    </div>
                    <div className='Boot'>
                        <FontAwesomeIcon icon={faBootstrap} size="5x"/>
                        <p>Bootstrap</p>
                    </div>
                    <div className='SQL'>
                        <FontAwesomeIcon icon={faDatabase} size="5x"/>
                        <p>PostgreSQL</p>
                    </div>
                    <FontAwesomeIcon icon={['fas', 'github']} />
                </div>
            </div>
        </div>
    )
}

export default Skills;