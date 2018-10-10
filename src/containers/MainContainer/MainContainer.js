import React, { Component } from 'react';
import './MainContainer.less';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import PageContainer from '../PageContainer/PageContainer';

class MainContainer extends Component {
  render() {
    return (
        <div className="main-container">
          <Header />
          <div className="main-content">
            <Sidebar />
            <PageContainer />
          </div>
        </div>
    )
  }
}

export default MainContainer;