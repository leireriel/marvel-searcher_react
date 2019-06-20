import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return(
      <nav className="contact__wrapper">
        <ol className="contact__list">
          <li className="contact__item">
            Prueba para
            <span> </span>
            <a href="https://www.fintonic.com/es-ES/inicio/" target="_blank" rel="noopener noreferrer" className="contact__link">
              Fintonic
            </a>
          </li>
          <li className="contact__item">
            <a href="https://github.com/leireriel/" target="_blank" rel="noopener noreferrer" className="contact__link">
              Leire Rico
              <span> </span>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ol>
      </nav>
    );
  }
}

export default Contact;