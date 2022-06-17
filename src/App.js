import React from 'react';
import './Main.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import './fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Wrapper() {
  return (
    <div className="wrapper">
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />

    </div>
  );
}

export default Wrapper;
