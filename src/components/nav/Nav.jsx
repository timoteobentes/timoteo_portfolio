import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            {/* <h3><a href="#home"></a></h3> */}
            <ul>
                <li><a href="#contact">CONTATO</a></li>
                <li><a href="#projects">PROJETOS</a></li>
                <li><a href="#skills">HABILIDADES</a></li>
                <li><a href="#about">SOBRE MIM</a></li>
                <li><a href="#home">INÍCIO</a></li>
            </ul>
        </div>
    )
}

export default Nav;