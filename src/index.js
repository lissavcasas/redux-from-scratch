import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Results from './components/Results';
import Details from './components/Details';
import store from './redux/store'


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/details/:itemId" component={Details} />
        <Redirect from="/" to="/results" />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));

