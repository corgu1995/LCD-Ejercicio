import React, { Component } from 'react';
import './Estilos/App.css';
import PropTypes from 'prop-types';

//Componentes
import Header from './Main/Header.js';
import Body from './Main/Body.js';
import Footer from './Main/Footer.js';

/**
* Clase encargada de manejar la navegación entre las diferentes páginas
* Autor: Santiago Parra
* Version: 1.0.0
*/
class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
          <Header/>
          <Body body={children} />
          <Footer />
      </div>
    );
  }

}

export default App;
