import React from 'react';
import './index.css';
import './App.css';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Menu from './components/Menu/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Menu/>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
