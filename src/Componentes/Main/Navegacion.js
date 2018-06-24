import React from 'react';
import { Link } from 'react-router-dom';
import Logo from  '../Imagenes/logo2.png';

/**
* Clase encargada de manejar la navegación entre las diferentes páginas
* Autor: Santiago Parra
* Version: 1.0.0
*/

const Navegacion = () =>
<div>
    { <NavegacionUn />
    }
</div>
const NavegacionUn = () =>
<header className="Header">
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logo"></img></th>
              <th><h1 className="titulo">Pantalla LCD</h1></th>
              </tr>
            </tbody>
          </table>
            <ul className="menu">
          <Link to={'/'}><li><button id="btnLcd" className="boton sobre"> LCD </button></li></Link>
          <Link to={'/informacion'}> <li><button id="btnInfo" className="boton sobre"> Información </button></li></Link>
          <Link to={'/contacto'}> <li><button id="btnContacto" className="boton sobre"> Contacto </button></li></Link>
           </ul>
        </header>

export default Navegacion;
