import React, { Component } from 'react';
import './Header.less';
import logo from './../../assets/img/logo.svg'

class Header extends Component {
  render() {
    return (
        <div className="container-header">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>

          <main>
            <div>Search</div>
          </main>
        </div>
    )
  }
}

export default Header;