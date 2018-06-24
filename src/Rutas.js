//Dependencias

import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

//Componentes

import App from './Componentes/App.js';
import Lcd from './Componentes/Lcd/App.js';
import Informacion from './Componentes/Informacion/Informacion.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Page404 from './Componentes/Page404/Page404.js';


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={ Lcd } />
        <Route path="/informacion" component={ Informacion } />
        <Route path="/contacto" component={ Contacto } />
        <Route component={Page404} />
    </Switch>
</App>;

export default AppRoutes;
