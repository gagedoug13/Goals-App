import './App.css';
import Welcome from './components/Welcome'
import Todos from './components/Todos'
import Goals from './components/Goals'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/todos' component={Todos}/>
          <Route path='/goals' component={Goals}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
