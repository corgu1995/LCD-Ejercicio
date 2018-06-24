import React, { Component } from 'react';
import '../Estilos/Body.css';
import PropTypes from 'prop-types';

/**
* Clase encargada del body en la vista
* Autor: Santiago Parra
* Version: 1.0.0
*/
class Body extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    const { body } = this.props;
    return (
      <div>
        {body }
      </div>
    );
  }
}


export default Body;
