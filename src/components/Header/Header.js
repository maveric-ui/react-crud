import React, { Component } from 'react';
import './Header.less';
import logo from './../../assets/img/logo.svg'
import SearchComponent from '../SearchComponent/SearchComponent';

class Header extends Component {
  render() {
    return (
        <div className="container-header">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="header__items">
            <SearchComponent />
          </div>
        </div>
    )
  }
}

export default Header;