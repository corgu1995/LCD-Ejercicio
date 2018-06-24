import React, { Component } from 'react';
import Banner from '../Imagenes/logo3.png';
import icono1 from '../Imagenes/icono1.png';
import icono2 from '../Imagenes/icono3.png';
import icono3 from '../Imagenes/icono4.png';

import './Contacto.css';

/**
* Clase encargada de mostar la información de contacto
* Autor: Santiago Parra
* Version: 1.4.0
*/


class Contacto extends Component {
  render() {
    return (
      <div className="App">
          <img src={Banner} className="banner" alt="Banner" ></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
                <div className="container1">
                <img src={icono1} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">Santiagosbob@gmail.com </p>
                </div>
              </th>
              <th>
                <div className="container2">
                <img src={icono2} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">3175614220</p>
                </div>
              </th>
              <th>
                <div className="container3">
                <img src={icono3} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">La Estrella, Antioquia</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}


export default Contacto;
