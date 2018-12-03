import React, { Component } from 'react';
import './HeaderContainer.less';
import logo from './../../assets/img/logo.svg'
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import connect from 'react-redux/es/connect/connect';
import { searchEmployee } from '../../actions/ProfilesAction';
import NotificationComponent from '../../components/NotificationComponent/NotificationComponent';
import { deleteNotification, getNotifications } from '../../actions/NotificationsAction';
import LogInComponent from '../../components/LogInComponent/LogInComponent';

class HeaderContainer extends Component {

  render() {
    const {searchEmployee, getNotifications, notifications, deleteNotification} = this.props;
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
                deleteNotification={deleteNotification}
            />
            <LogInComponent />
          </div>
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    notifications: store.notificationsReducer.notifications,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchEmployee: searchKey => dispatch(searchEmployee(searchKey)),
    getNotifications: () => dispatch(getNotifications()),
    deleteNotification: notificationID => dispatch(deleteNotification(notificationID))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);