import React, { Component } from 'react';
import './MainContainer.less';
import Header from '../../components/Header/Header';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import EmployeesContainer from '../EmployeesContainer/EmployeesContainer';
import { getProfiles } from '../../actions/ProfilesAction';
import connect from 'react-redux/es/connect/connect';

class MainContainer extends Component {
  render() {
    const { profiles, getProfiles, isLoading } = this.props;

    return (
        <div className="root-container">
          <Header/>
          <div className="main-container">
            <SidebarComponent/>
            <EmployeesContainer
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
    profiles: store.profilesReducer.profiles,
    isLoading: store.profilesReducer.isLoading,
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