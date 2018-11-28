import React, { Component } from 'react';
import './NotFoundComponent.less';
import { NavLink } from "react-router-dom";

class NotFoundComponent extends Component {
  render() {
    return (
        <div className="not-found-container">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page not found</h2>
          <NavLink to="/" className="not-found__link">Back to safety</NavLink>
        </div>
    )
  }
}

export default NotFoundComponent;