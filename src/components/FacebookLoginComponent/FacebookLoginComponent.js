import React, { Component } from 'react';
import './FacebookLoginComponent.less';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginComponent extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    })
  };

  handleLogout = () => {
    this.setState({isLoggedIn: false})
  };

  renderFacebookLog = () => {
    const {isLoggedIn, name, picture} = this.state;

    if (isLoggedIn) {
      return (
          <button className="btn btn-logout" onClick={this.handleLogout}>
            <img src={picture} className="logged-in__img" alt={name}/>
            <div className="logged-in-user-info">
              <p className="logged-in__name">{name}</p>
            </div>
          </button>
      )
    } else {
      return (
          <FacebookLogin
              appId="1900529580063948"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook}
          />
      )
    }
  };


  render() {
    return (
        <div>{this.renderFacebookLog()}</div>
    )
  }
}

export default FacebookLoginComponent;