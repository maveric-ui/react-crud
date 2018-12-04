import React, { Component } from 'react';
import './LogInComponent.less';
import { FacebookProvider, LoginButton } from 'react-facebook';


class LogInComponent extends Component {

  handleResponse = (response) => {
    this.props.facebookLogIn(response);
  };

  handleError = (error) => {
    this.setState({error});
  };

  handleLogOut = () => {
    this.props.facebookLogOut(false);
  };

  render() {
    const {isLoggedIn} = this.props;

    return (
        <FacebookProvider appId="1900529580063948">
          {isLoggedIn ?
              <button onClick={this.handleLogOut}>
                Log out
              </button>
              :
              <LoginButton
                  scope="email"
                  fields="name,email,picture"
                  onCompleted={this.handleResponse}
                  onError={this.handleError}
              >
                <span>Log into Facebook</span>
              </LoginButton>
          }
        </FacebookProvider>
    );
  }
}

export default LogInComponent;