import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import HomeScreen from '../screens/Home/HomeScreen';
import ListasScreen from '../screens/Listas/ListasScreen';
import ImagenesScreen from '../screens/Imagenes/ImagenesScreen';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact  path="/" component={HomeScreen} />
        <Route exact  path="/listas" component={ListasScreen} />
        <Route exact  path="/imagenes" component={ImagenesScreen} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
