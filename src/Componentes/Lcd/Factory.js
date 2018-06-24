import React, { Component } from 'react';
import './Factory.css';


/**
* Constante para manejar los daos en los cambios de evento
*/
const porClave = (nombreKey, valor) => () => ({
  [nombreKey]: valor,
});

var _ = require('underscore')

//Constantes usadas para imprimir los números como segmentos.
const strNumerosEnSegmentos = [
  '010101111',
  '000001001',
  '010011110',
  '010011011',
  '000111001',
  '010110011',
  '010110111',
  '010001001',
  '010111111',
  '010111011'
]

const strSegmentos = [
  {strUno: ' _ ', strDos: '| |', strTres: '|_|'},
  {strUno: '   ', strDos: '  |', strTres: '  |'},
  {strUno: ' _ ', strDos: ' _|', strTres: '|_ '},
  {strUno: ' _ ', strDos: ' _|', strTres: ' _|'},
  {strUno: '   ', strDos: '|_|', strTres: '  |'},
  {strUno: ' _ ', strDos: '|_ ', strTres: ' _|'},
  {strUno: ' _ ', strDos: '|_ ', strTres: '|_|'},
  {strUno: ' _ ', strDos: '  |', strTres: '  |'},
  {strUno: ' _ ', strDos: '|_|', strTres: '|_|'},
  {strUno: ' _ ', strDos: '|_|', strTres: ' _|'},
]

/**
* Clase encargada de realizar la conversión de los números a formato LCD.
* Autor: Santiago Parra
* Version: 2.6.2
*/
class Creador extends Component {

  /**
  * Constructor de la clase
  */
  constructor() {
    super();
    this.state = {
      strNumero: '',
      strNumeroSalida: '',
      strSizeNumero : '',
      strLineaUno: '',
      strLineaDos: '',
      strLineaTres: '',
      matrizDeNumeros: [''][''],
      lineaDeNumeros: ['']
    }
    this.handleCambioDeNumero = this.handleCambioDeNumero.bind(this);
  }

  /**
  * Manejador de eventos encargado de obtener y guardar los números (entrada)
  *
  * @param strClave
  *            Clave del estado sobre el cual se van a guardar los datos al ocurrir el evento
  * @param strValor
  *            Evento de cambio
  */
  handleCambioDeNumero(strClave, strValor){
    this.setState(
      porClave(strClave, strValor)
    );
    //Verifica si el dato ingresado es valido
    if (/^[0-9]+\,?[0-9]*$/.test(strValor) || /^[0-9]$/.test(strValor)) {
      var strNumeros = strValor.split(",");

      //Verifia si el número cumple la condición de longitud
      if (strNumeros.length === 2 && strNumeros[0]>0
        && strNumeros[0]<=10){
          this.setState({strSizeNumero: strNumeros[0]})
          var strMatriz = _.range(strNumeros[0]*2+1).map(function() {
            return _.range(strNumeros[0]*2+1).map(function() {
              return " ";
            })
          })
          var strLinea = _.range(strNumeros[0]*2+1).map(function() {
            return "";
          })
          this.setState({matrizDeNumeros: strMatriz})
          this.setState({lineaDeNumeros: strLinea})
          var strArrayDeNumeros = strNumeros[1].split("");
          this.setState({strNumeroSalida: strNumeros[1]})
          this.voidLlenarSegmento(strArrayDeNumeros, this.state)
        }
        this.setState({strNumero: strValor})
      }
      else {
        this.setState({strNumeroSalida : "Por favor usar el  formato Tamaño, Número"})
        this.setState({strNumero : strValor})
      }
    }
    /**
    *
    * Procedimiento encargado de conformar las lineas necesarias para imprimir el número especificado
    *
    * @param strArrayDeNumeros
    *            Contiene los numeros a imprimir
    * @param props
    *            Retorna el primer valor que cumpla la condición
    */
    voidLlenarSegmento(strArrayDeNumeros, props){
      props.strLineaUno = ''
      props.strLineaDos = ''
      props.strLineaTres = ''
      strArrayDeNumeros.forEach( function(num) {
        props.strLineaUno = props.strLineaUno + " " + strSegmentos[num].strUno;
        props.strLineaDos = props.strLineaDos + " " + strSegmentos[num].strDos;
        props.strLineaTres = props.strLineaDos + " " + strSegmentos[num].three;
      })
      this.voidLlenarMatrizDeSegmentos(strArrayDeNumeros, props)
    }
    /**
    *
    * Procedimiento encargado de crear el array se segmentos que van a conformar los números mostrar
    *Se usan 7 segmentos
    * @param strArrayDeNumeros
    *            Contiene los numeros a imprimir
    * @param props
    *            Retorna el primer valor que cumpla la condición
    */
    voidLlenarMatrizDeSegmentos(strArrayDeNumeros, props){
      for (let i = 0; i < props.strSizeNumero*2+1; i++) {
        props.lineaDeNumeros[i]="";
      }
      this.setState({lineaDeNumeros: props.lineaDeNumeros})
      strArrayDeNumeros.forEach( function(num) {
        var strNumeroBinario = strNumerosEnSegmentos[num].split("")

        // Primera fila de los 7 segmentos de la matriz
        if (strNumeroBinario[1]==="1"){
          for (let i = 0; i < (props.strSizeNumero*2); i++) {
            props.matrizDeNumeros[0][i]= (i%2)===0 ? ' ' : '_'
          }
        }
        else {
          for (let i = 0; i < (props.strSizeNumero*2+1); i++) {
            props.matrizDeNumeros[0][i]=" "
          }
        }
        // Filas 2 - n-1 de los 7 segmentos de la matriz
        for (let i = 1; i <= (props.strSizeNumero); i++) {
          props.matrizDeNumeros[i][0]=strNumeroBinario[3]==='0' ? ' ' : '|'
          props.matrizDeNumeros[i][(props.strSizeNumero*2)]=strNumeroBinario[5]==='0' ? ' ' : '|'
        }

        // Fila n de los 7 segmentos de la matriz
        if (strNumeroBinario[4]==="1"){
          for (let i = 1; i < (props.strSizeNumero*2); i++) {
            props.matrizDeNumeros[props.strSizeNumero][i]= (i%2)===0 ? ' ' : '_'
          }
        }
        else {
          for (let i = 1; i < (props.strSizeNumero*2); i++) {
            props.matrizDeNumeros[props.strSizeNumero][i]=" "
          }
        }

        // Filas n+1 - n*2+1 de los 7 segmentos de la matriz
        let i = props.strSizeNumero;
        i++;
        for (; i <= props.strSizeNumero*2; i++) {
          props.matrizDeNumeros[i][0]=strNumeroBinario[6]==='0' ? ' ' : '|'
          props.matrizDeNumeros[i][(props.strSizeNumero*2)]=strNumeroBinario[8]==='0' ? ' ' : '|'
        }

        // Última fila de los 7 segmentos de la matriz
        if (strNumeroBinario[7]==="1"){
          for (let i = 1; i < (props.strSizeNumero*2); i++) {
            props.matrizDeNumeros[props.strSizeNumero*2][i]= (i%2)===0 ? ' ' : '_'
          }
        }
        else {
          for (let i = 1; i < (props.strSizeNumero*2); i++) {
            props.matrizDeNumeros[props.strSizeNumero*2][i]=" "
          }
        }

        // Llena el string de lineas con los 7 la información de la matriz de segmentos
        for (let i = 0; i <= props.strSizeNumero*2; i++) {
          var strFilasMatriz = [];
          for (let j = 0; j <= props.strSizeNumero*2; j++) {
            strFilasMatriz.push(props.matrizDeNumeros[i][j])
          }
          props.lineaDeNumeros[i] = props.lineaDeNumeros[i]+'  '+strFilasMatriz.join('');
        }
      })
      this.setState({lineaDeNumeros: props.lineaDeNumeros})
      this.props.sendData(this.state.strNumero, this.state.strNumeroSalida, this.state.strSizeNumero, this.state.lineaDeNumeros);
    }

    render() {
      const {
        strNumero
      } = this.state;
      return (
        <div className="App">
          <table className="tablaArt">
          <tbody>
            <tr>
              <td>
                <div className="texto">Ejemplo: 2,1234</div>
              </td>
              <td>
                <input className="campoForm"
                value={strNumero}
                type="text"
                onChange={event => this.handleCambioDeNumero('strNumero', event.target.value)}
                />
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      );
    }
  }
  export default Creador;
