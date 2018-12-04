import React, { Component } from 'react';
import './HeaderContainer.less';
import logo from './../../assets/img/logo.svg'
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import connect from 'react-redux/es/connect/connect';
import { searchEmployee } from '../../actions/ProfilesAction';
import NotificationComponent from '../../components/NotificationComponent/NotificationComponent';
import { deleteNotification, getNotifications } from '../../actions/NotificationsAction';
import LogInComponent from '../../components/LogInComponent/LogInComponent';
import { facebookLogIn, facebookLogOut } from '../../actions/FacebookLoginAction';

class HeaderContainer extends Component {

  render() {
    const {
      searchEmployee,
      getNotifications,
      notifications,
      deleteNotification,
      facebookLogIn,
      isLoggedIn,
      facebookLogOut
    } = this.props;

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
            <LogInComponent
                isLoggedIn={isLoggedIn}
                facebookLogIn={facebookLogIn}
                facebookLogOut={facebookLogOut}
            />
          </div>
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    notifications: store.notificationsReducer.notifications,
    isLoggedIn: store.facebookLoginReducer.isLoggedIn,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchEmployee: searchKey => dispatch(searchEmployee(searchKey)),
    getNotifications: () => dispatch(getNotifications()),
    deleteNotification: notificationID => dispatch(deleteNotification(notificationID)),
    facebookLogIn: (response) => dispatch(facebookLogIn(response)),
    facebookLogOut: (response) => dispatch(facebookLogOut(response))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);