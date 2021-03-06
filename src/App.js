import './App.css';

import Tareas from './components/Tareas'
import Login from './components/Login'

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
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/tareas" component={Tareas} />
        </Switch>
      </Router>
    </TareasState>
  );
}

export default App;
