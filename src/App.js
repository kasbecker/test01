import React, { Component } from 'react';
// import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AdminLayout from 'layouts/Admin.jsx';
import Loginpage from './views/Loginpage';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './common/PrivateRoute';
// const hist = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component={Loginpage} />
            <PrivateRoute
              path='/admin'
              render={props => <AdminLayout {...props} />}
            />
            <Redirect to='/admin/dashboard' />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
