import React, { Component } from 'react';
import './HeaderComponent.less';
import logo from './../../assets/img/logo.svg'
import SearchComponent from '../SearchComponent/SearchComponent';
import connect from 'react-redux/es/connect/connect';
import { searchEmployee } from '../../actions/ProfilesAction';
import NotificationComponent from '../NotificationComponent/NotificationComponent';

class HeaderComponent extends Component {
  render() {
    const {searchEmployee} = this.props;
    return (
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="header__items">
            <SearchComponent searchEmployee={searchEmployee}/>
            <NotificationComponent />
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchEmployee: searchKey => dispatch(searchEmployee(searchKey)),
  }
};

export default connect(
    null,
    mapDispatchToProps
) (HeaderComponent);