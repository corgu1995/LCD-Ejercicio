import React, { Component } from 'react';
import '../Estilos/Header.css';
import Navegacion from './Navegacion.js';

/**
* Clase encargada del Header en la vista
* Autor: Santiago Parra
* Version: 1.0.0
*/

class Header extends Component {

  render() {
    return (
       <div className="App">
          <Navegacion authUser={this.props.authUser}/>
      </div>
    );
  }
}

export default Header;
