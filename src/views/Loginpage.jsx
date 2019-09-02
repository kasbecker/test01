import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../garuda.png';
import '../App.css';
import { Card, CardBody } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import CustomInput from './CustomInput.jsx';
import { login } from '../actions/auth';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import AuthContext from "../context/auth-context";

class Loginpage extends Component {
  state = {
    username: '',
    password: ''
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  loginHandler = formData => {
    this.props.login(formData);
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/admin/dashboard' />;
    }
    const { handleSubmit } = this.props;
    return (
      <div>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>PUSAT DATA PENDUDUK</p>
          <Card
            style={{
              backgroundColor: '#282c34',
              alignContent: 'center',
              textAlign: 'center'
            }}
          >
            <CardBody>
              <form onSubmit={handleSubmit(this.loginHandler)}>
                <fieldset>
                  <Field
                    name='username'
                    type='text'
                    label='Username'
                    id='username'
                    placeholder='input username'
                    component={CustomInput}
                  />
                </fieldset>
                <fieldset>
                  <Field
                    name='password'
                    type='password'
                    id='password'
                    label='Password'
                    placeholder='input password'
                    component={CustomInput}
                  />
                </fieldset>
                {this.props.errorMessage ? (
                  <div className='alert alert-danger'>
                    {this.props.errorMessage}
                  </div>
                ) : null}
                <button type='submit' className='btn btn-primary'>
                  SignIN
                </button>
              </form>
            </CardBody>
          </Card>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(
    mapStateToProps,
    { login }
  ),
  reduxForm({ form: 'login' })
)(Loginpage);
