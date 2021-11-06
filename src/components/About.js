import React from 'react';
import jslogo from '../img/jslogo.png';
import nodejslogo from '../img/nodejslogo.svg';
import reactlogo from '../img/reactlogo.png';
import reduxlogo from '../img/reduxlogo.png';
import psqllogo from '../img/psqllogo.png';
import html5logo from '../img/html5logo.svg';
import csslogo from '../img/csslogo.png';
import gitlogo from '../img/gitlogo.png';

const About = () => {
  return (
    <div id="main">
      <div id="about">
        <h1>About Me</h1>
        <div id="summary">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div id="technologies">
        <div className="technology">
          <img src={jslogo} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="technology">
          <img src={nodejslogo} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="technology">
          <img src={reactlogo} alt="React" />
          <p>React</p>
        </div>
        <div className="technology">
          <img src={reduxlogo} alt="Redux" />
          <p>Redux</p>
        </div>
        <div className="technology">
          <img src={psqllogo} alt="Postgres" />
          <p>Postgres</p>
        </div>
        <div className="technology">
          <img src={html5logo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="technology">
          <img src={csslogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="technology">
          <img src={gitlogo} alt="Git" />
          <p>Git</p>
        </div>
      </div>
    </div>
  )
}

export default About;
