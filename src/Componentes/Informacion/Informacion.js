import React, { Component } from 'react';
import Banner from '../Imagenes/logo4.jpg';
import icono1 from '../Imagenes/icono2.png';

import './Informacion.css';
/**
* Clase encargada de mostrar las razones por las  cuales se escogieron las tecnologías usadas.
* Autor: Santiago Parra
* Version: 1.2.0
*/
class Informacion extends Component {
  render() {
    return (
      <div className="App">
          <img src={Banner} className="banner" alt="Banner" ></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
                <div className="container2">
                <img src={icono1} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">Aplicación desarrollada con React.js</p>
                <p className="textoContainer">Pruebs unitarias elaboradas con el componente integrado de React.js</p>
                <p className="textoContainer">Pruebas automáticas elbaoradas con Katalon Studio</p>
                <p className="textoContainer">Aplicación desplegada en Heroku</p>
                </div>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Informacion;
