import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Git from './Git';
import Jenkins from './Jenkins';
import Docker from './Docker';
import Kubernetes from './Kubernetes';
import NoMatch from './NoMatch';
import Fourpointone from './Fourpointone';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/Git" component={Git}></Route>
    <Route path="/Jenkins" component={Jenkins}></Route>
    <Route path="/Docker" component={Docker}></Route>
    <Route path="/Kubernetes" component={Kubernetes}>
      <Route path="/Four/:id" component={Fourpointone} />
    </Route>
    <Route path="*" component={NoMatch}></Route>

  </Router>




,
  document.getElementById('root')
);
