import React from 'react';
import '../assets/logotur.png'

function Navbar() {
    return (
      <header>
        <nav>
          <div className="logo">
            <img src={require('../assets/logotur.png')} width={118} alt="Logo" />
          </div>
          <p>Acess Tour</p>
          <ul className="navigation-menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#serv-groom">Serviços</a></li>
            <li><a href="#locate">Quem Somos</a></li>
          </ul>
          <div className="Mille">
            <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">Faça o seu login</span></button>
          </div>
        </nav>
      </header>
    );
  }

export default Navbar;
