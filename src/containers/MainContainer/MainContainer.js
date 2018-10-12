import React, { Component } from 'react';
import './MainContainer.less';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import PageContainer from '../PageContainer/PageContainer';
import { getProfiles } from '../../actions/ProfileAction';
import connect from 'react-redux/es/connect/connect';

class MainContainer extends Component {
  render() {
    const { profiles, getProfiles, isLoading } = this.props;

    return (
        <div className="main-container">
          <Header/>
          <div className="main-content">
            <Sidebar/>
            <PageContainer
                profiles={profiles}
                getProfiles={getProfiles}
                isLoading={isLoading}
            />
          </div>
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    profiles: store.profiles,
    isLoading: store.isLoading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfiles: () => dispatch(getProfiles())
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);