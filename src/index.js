import React from 'react';
import ReactDOM from 'react-dom';
/* import App from './App'; */
/* import * as serviceWorker from './serviceWorker'; */
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Results from './components/Results'
import Details from './components/Details'


const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/results" component={Results} />
      <Route path="/details/:itemId" component={Details} />
      <Redirect from="/" to="/results" />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(Root, document.getElementById('root'));

/* serviceWorker.unregister(); */
