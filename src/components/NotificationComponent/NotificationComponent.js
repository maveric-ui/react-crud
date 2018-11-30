import React, { Component } from 'react';
import './NotificationComponent.less';
import { IconButton, Icon } from '@material-ui/core';

function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

class NotificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    this.props.getNotifications();
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleClickDropDown = () => {
    this.setState(state => ({isOpen: !state.isOpen}))
  };

  handleOutsideClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.setState({isOpen: false})
  };

  deleteNotification = (e, notification) => {
    this.props.deleteNotification(notification.id)
  };

  renderNotifications = () => {
    const {notifications} = this.props;
    const sortedNotification = notifications.sort(sortByDate);
    const dateOption = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return sortedNotification.map((notification) => {
      const notificationDate = new Date(notification.date).toLocaleString('ru', dateOption);
      return (
          <div className="card-container" key={notification.id}>
            <span className="card-date">{notificationDate}</span>
            <div className="card-content">{notification.message}</div>
            <div className="card-control">
              <IconButton className="btn__delete-notification"
                          onClick={(e) => this.deleteNotification(e, notification)}
              >
                <Icon>close</Icon>
              </IconButton>
            </div>
          </div>
      )
    });
  };


  render() {
    const {isOpen} = this.state;
    const {notifications} = this.props;
    return (
        <div className="notification-container" ref={node => this.node = node}>
          <IconButton className="btn btn-notification" onClick={this.handleClickDropDown}>
            <span className="notification-icon"/>
            <span className={`notification-indicator ${notifications.length ? "show" : "hidden"}`}/>
          </IconButton>

          <div className={`dropdown-container ${isOpen ? "show" : "hidden"}`}>
            <div className="dropdown__title">Notification</div>
            <div className="dropdown__content">
              {notifications.length ? this.renderNotifications() :
                  <p className="content-empty">You don't have any notifications yet</p>
              }
            </div>
          </div>
        </div>
    );
  }
}

export default NotificationComponent;