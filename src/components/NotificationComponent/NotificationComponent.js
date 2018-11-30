import React, { Component } from 'react';
import './NotificationComponent.less';
import { IconButton, Icon } from '@material-ui/core';


class NotificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isNotification: !!props.notifications,
    }
  }

  componentDidMount() {
    this.props.getNotifications();
    document.addEventListener('mousedown', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  handleClickDropDown = () => {
    this.setState(state => ({isOpen: !state.isOpen}))
  };

  handleOutsideClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickDropDown();
  };

  renderNotifications = () => {
    const {notifications} = this.props;
    const dateOption = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    return notifications.map((notification) => {
      const notificationDate = new Date(notification.date).toLocaleDateString('ru', dateOption);
      return (
          <div className="card-container" key={notification.id}>
            <span className="card-date">{notificationDate}</span>
            <div className="card-content">{notification.message}</div>
            <div className="card-control">
              <IconButton  size="small" variant="contained">
                <Icon>close</Icon>
              </IconButton >
            </div>
          </div>
      )
    });
  };


  render() {
    const {isOpen, isNotification} = this.state;
    return (
        <div className="notification-container" ref={node => this.node = node}>
          <IconButton className="btn btn-notification" onClick={this.handleClickDropDown}>
            <span className="notification-icon"/>
            <span className={`notification-indicator ${isNotification ? "show" : "hidden"}`}/>
          </IconButton>

          <div className={`dropdown-container ${isOpen ? "show" : "hidden"}`}>
            <div className="dropdown__title">Notification</div>
            <div className="dropdown__content">{this.renderNotifications()}</div>
          </div>
        </div>
    );
  }
}

export default NotificationComponent;