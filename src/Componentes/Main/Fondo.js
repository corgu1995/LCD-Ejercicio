import React, { Component } from 'react';
import '../Estilos/Body.css';
import Background from '../Imagenes/fondo1.jpg';

         var sectionStyle = {
            width: "200%",
            height: "400px",
            backgroundImage: "url(" + Background + ")"
          };

          /**
          * Clase encargada del fondo de la aplcación
          * Autor: Santiago Parra
          * Version: 1.1.0
          */
class Fondo extends Component {
    render() {
        return (
          <section style={ sectionStyle }>
          </section>
        );
      }
}


export default Fondo;
