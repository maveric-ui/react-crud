import React, { Component } from 'react';
import './HeaderComponent.less';
import logo from './../../assets/img/logo.svg'
import SearchComponent from '../SearchComponent/SearchComponent';
import connect from 'react-redux/es/connect/connect';
import { searchEmployee } from '../../actions/ProfilesAction';
import NotificationComponent from '../NotificationComponent/NotificationComponent';
import { getNotifications } from '../../actions/NotificationsAction';

class HeaderComponent extends Component {



  render() {
    const {searchEmployee, getNotifications, notifications} = this.props;
    return (
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="header__items">
            <SearchComponent searchEmployee={searchEmployee}/>
            <NotificationComponent
                getNotifications={getNotifications}
                notifications={notifications}
            />
          </div>
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    notifications: store.notificationsReducer.notifications
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchEmployee: searchKey => dispatch(searchEmployee(searchKey)),
    getNotifications: () => dispatch(getNotifications())
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (HeaderComponent);