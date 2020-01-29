import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/AppBar/AppBar';
import Reloj from './components/Reloj/Reloj';

function App() {
  return (
    <MuiThemeProvider>
      <AppBar titulo="Bienvenido a React" />
      <Reloj />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
