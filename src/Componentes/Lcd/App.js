/**
* Estándar de nombramiento: L-TI-02 - http://es.presidencia.gov.co/dapre/DocumentosSIGEPRE/L-TI-11-denominacion-desarrollo-software.pdf
* Comience el nombre de la variable con una letra.
* La primera letra de cada palabra en mayúscula.
* Debe describir claramente el propósito de la variable.
* Usar un prefijo que indique el tipo de dato.
* Usar comentarios que describan el ámbito en el que se encuentran definidas las
*variables.
*
*Estándar de versiones: X.Y.Z
*/

import React, { Component } from 'react';
import './App.css';
import Creador from './Factory.js';


/**
* Clase principal encargada de obtener y  mostrar los números en tipo LCD.
* Autor: Santiago Parra
* Version: 1.4.0
*/

class App extends Component {

  /**
  * Constructor de la clase
  */
  constructor(){
    super();
    this.getData = this.getData.bind(this);
    this.state= ({
      strNumero: '',
      strNumeroSalida: '',
      strSizeNumero : '',
      lineaDeNumeros: ['']
    });
  }

  /**
  * Método encargado de obtner los datos para mostrarlos en formato LCD
  *
  * @param strNumeroRecibido
  *            Contiene todos los datos
  * @param strNumeroSalidaRecibido
  *            Contiene los números a mostar
  * @param strNumeroRecibido
  *            Contiene el tamaño que tendrán los números
  * @param lineaDeNumerosRecibido
  *            Contiene los segemntos que conforman los números a mostrar
  */
  getData(strNumeroRecibido, strNumeroSalidaRecibido, strSizeNumeroRecibido, lineaDeNumerosRecibido){
    this.setState({
      strNumero: strNumeroRecibido,
      strNumeroSalida: strNumeroSalidaRecibido,
      strSizeNumero: strSizeNumeroRecibido,
      lineaDeNumeros: lineaDeNumerosRecibido
    });
  }


  /**
  *
  * Procedimiento encargado de mostrar las lineas que conforman los números a  mostrar
  *
  */
  tablaDeLineas() {
    if(this.state.lineaDeNumeros){
      var strLineas = this.state.lineaDeNumeros;
      var strlistaDeLineas = strLineas.map((strLinea) => <pre className="pre-style">{strLinea}</pre>);
      return(
        <div className="Segmentos">{strlistaDeLineas}</div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <table className="tabla">
          <tbody>
            <tr>
              <th>Entrada</th>
              <th>Pantalla</th>
            </tr>
            <tr>
              <td className="borde">
                <h2>Ingrese los números a convertir</h2>
                <h4>Tamaño, Número:</h4>
                <br/>
                <Creador sendData={this.getData}/>
              </td>
              <td>
                <div>{this.tablaDeLineas()}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
