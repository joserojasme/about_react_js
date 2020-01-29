import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/AppBar/AppBar';
import Routes from './routes/Routes';
import Drawer from './components/Drawer/Drawer';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <MuiThemeProvider>
      <AppBar titulo="Bienvenido a React" />
      <Drawer />
      <Routes />
      <Footer />
      <Spinner />
    </MuiThemeProvider>
  );
}

export default App;
