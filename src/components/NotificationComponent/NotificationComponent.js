import React, { Component } from 'react';
import './NotificationComponent.less';


class NotificationComponent extends Component{
  render() {
    return (
        <div className="notification-container">
          <span className="i-notification" />
        </div>
    );
  }
}

export default NotificationComponent;