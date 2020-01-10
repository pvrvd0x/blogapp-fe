import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Home, Article} from "./Pages";

import './assets/styles/index.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/article'} component={Article}/>
        <Route path={'/'} component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
