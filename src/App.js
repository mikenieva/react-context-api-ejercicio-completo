import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import TareasState from './context/tareas/TareasState'
import AuthState from './context/autenticacion/AuthState'

function App() {
  return (
    <TareasState>
      <div className="App">
        Hola
      </div>
    </TareasState>
  );
}

export default App;
