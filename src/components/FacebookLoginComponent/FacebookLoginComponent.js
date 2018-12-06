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

  componentClicked = () => {
    console.log('click')
  };

  renderFacebookLog = () => {
    const {isLoggedIn, name, picture} = this.state;

    if (isLoggedIn) {
      return (
          <div className="logged-in-container">
            <img src={picture} className="logged-in__img" alt={name}/>
            <div className="logged-in-user-info">
              <p className="logged-in__name">{name}</p>
            </div>

          </div>
      )
    } else {
      return (
          <FacebookLogin
              appId="1900529580063948"
              autoLoad={true}
              fields="name,email,picture"
              onClick={this.componentClicked}
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