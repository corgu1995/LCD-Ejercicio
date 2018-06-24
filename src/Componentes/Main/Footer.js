import React, { Component } from 'react';
import '../Estilos/Footer.css';
import LogoFooter from '../Imagenes/footerLogo.png';

/**
* Clase encargada del footer en la vista
* Autor: Santiago Parra
* Version: 1.0.0
*/
class Footer extends Component {

  render() {
    return (
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web creada para el ejercicio técnico de Sofka</p>
            <p>Santiago Parra Rendón</p>
            <img src={LogoFooter} className="footerLogo" ></img>
        </div>
      </div>
    );
  }
}
export default Footer;
