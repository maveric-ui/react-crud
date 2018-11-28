import React, { Component } from 'react';
import './MainContainer.less';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from '../../routers/MainRouter';
import { Switch, Route, Redirect } from 'react-router'

class MainContainer extends Component {
  render() {
    return (
        <Router>
          <div className="root-container">
            <HeaderComponent/>
            <div className="main-container">
              <SidebarComponent/>
              <Switch>
                <Redirect exact from="/" to="/employees/"/>
                {MainRoutes.map((route, index) => (
                    <Route
                      key={index}
                      exact={route.exact}
                      path={route.path}
                      component={route.component}
                    />
                ))}
              </Switch>
            </div>
          </div>
        </Router>
    )
  }
}

export default MainContainer;