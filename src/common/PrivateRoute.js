import React from 'react';
import AdminLayout from '../layouts/Admin';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <h2>Loading....</h2>;
      } else if (!auth.isAuthenticated) {
        return <Redirect to='/login' />;
      } else {
        return <AdminLayout {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
