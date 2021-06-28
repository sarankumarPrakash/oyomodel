import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';


function App() {
  return (
    <div className="App">
     <Router>
          <div className={'main-container'}>
            <Switch>
              
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
